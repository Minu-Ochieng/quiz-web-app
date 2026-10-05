import { QUESTION_BANK } from './data/questions';

const BASE_URL = 'https://opentdb.com/api.php';

// true = use our own question bank, false = use the real Open Trivia DB API
const USE_LOCAL = true;

const NOT_ENOUGH_MESSAGE =
  'There are not enough questions for this choice. Try fewer questions or another category.';

export function buildUrl(amount, category, difficulty) {
  let url = `${BASE_URL}?amount=${amount}&type=multiple`;
  if (category !== 'any') url += `&category=${category}`;
  if (difficulty !== 'any') url += `&difficulty=${difficulty}`;
  return url;
}

function getLocalQuestions(amount, category, difficulty) {
  const matches = QUESTION_BANK.filter((q) => {
    const categoryOk = category === 'any' || String(q.categoryId) === String(category);
    const difficultyOk = difficulty === 'any' || q.difficulty === difficulty;
    return categoryOk && difficultyOk;
  });

  if (matches.length < amount) {
    throw new Error(NOT_ENOUGH_MESSAGE);
  }
  return shuffle(matches).slice(0, amount);
}

export async function fetchQuestions(amount, category, difficulty) {
  if (USE_LOCAL) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return getLocalQuestions(amount, category, difficulty).map(cleanQuestion);
  }

  const url = buildUrl(amount, category, difficulty);

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

  if (data.response_code === 1) throw new Error(NOT_ENOUGH_MESSAGE);
  if (data.response_code === 5) {
    throw new Error('Too many requests. Please wait a few seconds and try again.');
  }
  if (data.response_code !== 0) {
    throw new Error('Something went wrong while loading the questions.');
  }

  return data.results.map(cleanQuestion);
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

export function cleanQuestion(raw) {
  const correct = decodeHtml(raw.correct_answer);
  const wrong = raw.incorrect_answers.map(decodeHtml);

  return {
    category: decodeHtml(raw.category),
    difficulty: raw.difficulty,
    question: decodeHtml(raw.question),
    correctAnswer: correct,
    answers: shuffle([correct, ...wrong]),
  };
}