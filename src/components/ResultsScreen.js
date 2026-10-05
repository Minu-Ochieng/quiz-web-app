// Which difficulty comes after which
const NEXT_LEVEL = { any: 'medium', easy: 'medium', medium: 'hard' };
const LEVEL_NAMES = { any: 'Mixed', easy: 'Easy', medium: 'Medium', hard: 'Hard' };

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function getMessage(percent) {
  if (percent === 100) return { emoji: '🏆', title: 'Perfect score!', text: 'Flawless. You got every question right.' };
  if (percent >= 80) return { emoji: '🎉', title: 'Excellent work!', text: 'You really know your stuff.' };
  if (percent >= 60) return { emoji: '👏', title: 'Well done!', text: 'A solid result. You are ready for more.' };
  if (percent >= 40) return { emoji: '🙂', title: 'Good effort', text: 'Not bad. A little practice will help.' };
  return { emoji: '💪', title: 'Keep practising', text: 'Every quiz makes you better. Try again!' };
}

function ResultsScreen({ score, total, settings, loading, error, onPlayAgain, onNextLevel, onNewQuiz }) {
  const percent = Math.round((score / total) * 100);
  const wrong = total - score;
  const message = getMessage(percent);

  const nextLevel = NEXT_LEVEL[settings.difficulty]; // undefined when already on hard
  const unlocked = percent >= 60;

  // How much of the ring is empty (0 = full circle)
  const offset = CIRCUMFERENCE * (1 - percent / 100);

  return (
    <div className="results">
      <div className="results-emoji">{message.emoji}</div>
      <h2 className="results-title">{message.title}</h2>
      <p className="results-text">{message.text}</p>

      <div className="ring">
        <svg viewBox="0 0 140 140">
          <circle className="ring-bg" cx="70" cy="70" r={RADIUS} />
          <circle
            className="ring-fill"
            cx="70"
            cy="70"
            r={RADIUS}
            style={{
              '--circ': CIRCUMFERENCE,
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <div className="ring-label">
          <strong>{percent}%</strong>
          <span>
            {score} / {total}
          </span>
        </div>
      </div>

      <div className="stats">
        <div className="stat good">
          <strong>{score}</strong>
          <span>Correct</span>
        </div>
        <div className="stat bad">
          <strong>{wrong}</strong>
          <span>Wrong</span>
        </div>
        <div className="stat">
          <strong>{LEVEL_NAMES[settings.difficulty]}</strong>
          <span>Level</span>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="results-actions">
        {nextLevel && (
          <button
            className="primary"
            disabled={!unlocked || loading}
            onClick={() => onNextLevel(nextLevel)}
          >
            {unlocked
              ? `Next level: ${LEVEL_NAMES[nextLevel]} →`
              : `🔒 Next level: ${LEVEL_NAMES[nextLevel]}`}
          </button>
        )}
        {nextLevel && !unlocked && (
          <p className="lock-note">Score 60% or more to unlock the next level.</p>
        )}
        {!nextLevel && <p className="lock-note">🌟 You have reached the highest level!</p>}

        <button className="secondary" onClick={onPlayAgain} disabled={loading}>
          {loading ? 'Loading...' : 'Play again'}
        </button>
        <button className="link-button" onClick={onNewQuiz}>
          Change category or settings
        </button>
      </div>
    </div>
  );
}

export default ResultsScreen;