import { useState } from 'react';
import { CATEGORIES } from '../data/questions';

const DIFFICULTIES = [
  { id: 'any', name: 'Any' },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' },
];

const AMOUNTS = [3, 5, 10];

function SetupScreen({ onStart, loading, error }) {
  const [category, setCategory] = useState('any');
  const [difficulty, setDifficulty] = useState('any');
  const [amount, setAmount] = useState(5);

  const categoryName = CATEGORIES.find((c) => String(c.id) === String(category)).name;
  const difficultyName = DIFFICULTIES.find((d) => d.id === difficulty).name;

  return (
    <>
      <section className="hero">
        <h1>
          Build Your
          <br />
          Own Quiz
        </h1>
        <p>
          Pick a topic, choose how hard you want it, and decide how many
          questions to answer. We will do the rest.
        </p>
      </section>

      <div className="setup-layout">
        <div className="setup-options">
          <div className="card">
            <h3>Category</h3>
            <p className="hint">What do you want to be asked about?</p>
            <div className="chips">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={String(c.id) === String(category) ? 'chip selected' : 'chip'}
                  onClick={() => setCategory(c.id)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Difficulty</h3>
            <p className="hint">Easy is a warm-up, hard is a challenge.</p>
            <div className="chips">
              {DIFFICULTIES.map((d) => (
                <button
                  key={d.id}
                  className={d.id === difficulty ? 'chip selected' : 'chip'}
                  onClick={() => setDifficulty(d.id)}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Number of questions</h3>
            <p className="hint">More questions means a longer quiz.</p>
            <div className="chips">
              {AMOUNTS.map((n) => (
                <button
                  key={n}
                  className={n === amount ? 'chip selected' : 'chip'}
                  onClick={() => setAmount(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="card summary">
          <h3 className="summary-title">Quiz summary</h3>

          <div className="summary-row">
            <span>Category</span>
            <strong>{categoryName}</strong>
          </div>
          <div className="summary-row">
            <span>Difficulty</span>
            <strong>{difficultyName}</strong>
          </div>
          <div className="summary-row">
            <span>Questions</span>
            <strong>{amount}</strong>
          </div>

          {error && <p className="error">{error}</p>}

          <button
            className="primary"
            onClick={() => onStart(amount, category, difficulty)}
            disabled={loading}
          >
            {loading ? 'Loading questions...' : 'Start quiz'}
          </button>
        </aside>
      </div>
    </>
  );
}

export default SetupScreen;