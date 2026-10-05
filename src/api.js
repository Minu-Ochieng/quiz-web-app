const BASE_URL = 'https://the-trivia-api.com/v2/questions';

// Remembers the ids of questions already shown, so they don't repeat
// during this session. It resets when you refresh the page.
const seenIds = new Set();

// Builds the full URL from the user's choices
export function buildUrl(limit, category, difficulty) {
  let url = `${BASE_URL}?limit=${limit}`;
  if (category !== 'any') url += `&categories=${category}`;
  if (difficulty !== 'any') url += `&difficulties=${difficulty}`;
  return url;
}

export async function fetchQuestions(amount, category, difficulty) {
  // Ask for extra questions so we have spares after removing repeats
  const limit = Math.min(amount * 3, 50);
  const url = buildUrl(limit, category, difficulty);

  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error('Could not reach the server. Please check your internet connection.');
  }

  if (response.status === 429) {
    throw new Error('Too many requests. Please wait a few seconds and try again.');
  }
  if (!response.ok) {
    throw new Error(`Server error (${response.status}). Please try again later.`);
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('No questions found for this choice. Try another category or difficulty.');
  }

  // Prefer questions we have not shown yet, then fill up with old ones if needed
  const fresh = data.filter((q) => !seenIds.has(q.id));
  const old = data.filter((q) => seenIds.has(q.id));
  const chosen = [...fresh, ...old].slice(0, amount);

  chosen.forEach((q) => seenIds.add(q.id));

  return chosen.map(cleanQuestion);
}

function decodeHtml(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// This API names its fields differently from Open Trivia DB,
// so we convert to the same clean shape the screens already use.
export function cleanQuestion(raw) {
  const correct = decodeHtml(raw.correctAnswer);
  const wrong = raw.incorrectAnswers.map(decodeHtml);

  return {
    category: decodeHtml(raw.category),
    difficulty: raw.difficulty,
    question: decodeHtml(raw.question.text),
    correctAnswer: correct,
    answers: shuffle([correct, ...wrong]),
  };
}