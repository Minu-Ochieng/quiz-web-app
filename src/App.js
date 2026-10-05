import { useState } from 'react';
import './App.css';
import { fetchQuestions } from './api';
import SetupScreen from './components/SetupScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [screen, setScreen] = useState('setup'); // 'setup', 'quiz' or 'results'
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [settings, setSettings] = useState({ amount: 5, category: 'any', difficulty: 'any' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleStart(amount, category, difficulty) {
    setLoading(true);
    setError('');

    try {
      const result = await fetchQuestions(amount, category, difficulty);
      setQuestions(result);
      setSettings({ amount, category, difficulty }); // remember the choices
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

  function handlePlayAgain() {
    handleStart(settings.amount, settings.category, settings.difficulty);
  }

  function handleNextLevel(nextDifficulty) {
    // Our own bank has only 3 questions per category and level,
    // so we cap at 3. Remove Math.min once you add more questions.
    handleStart(Math.min(settings.amount, 3), settings.category, nextDifficulty);
  }

  function handleNewQuiz() {
    setError('');
    setScreen('setup');
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
            <ResultsScreen
              score={score}
              total={questions.length}
              settings={settings}
              loading={loading}
              error={error}
              onPlayAgain={handlePlayAgain}
              onNextLevel={handleNextLevel}
              onNewQuiz={handleNewQuiz}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;