import { useState } from 'react';
import './App.css';
import { fetchQuestions } from './api';
import SetupScreen from './components/SetupScreen';
import QuizScreen from './components/QuizScreen';

function App() {
  const [screen, setScreen] = useState('setup'); // 'setup', 'quiz' or 'results'
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleStart(amount, category, difficulty) {
    setLoading(true);
    setError('');

    try {
      const result = await fetchQuestions(amount, category, difficulty);
      setQuestions(result);
      setScreen('quiz');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleFinish(finalScore) {
    setScore(finalScore);
    setScreen('results');
  }

  return (
    <div className="page">
      <header className="topbar">
        <span className="brand">Quiz &amp; Co.</span>
      </header>

      <main className="content">
        {screen === 'setup' && (
          <SetupScreen onStart={handleStart} loading={loading} error={error} />
        )}

        {screen === 'quiz' && (
          <div className="card narrow">
            <QuizScreen questions={questions} onFinish={handleFinish} />
          </div>
        )}

        {screen === 'results' && (
          <div className="card narrow">
            <p>
              Temporary results: {score} / {questions.length}
            </p>
            <button className="primary" onClick={() => setScreen('setup')}>
              Back to setup
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;