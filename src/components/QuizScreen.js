import { useState } from 'react';

function QuizScreen({ questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null); // the answer the user clicked
  const [score, setScore] = useState(0);

  const current = questions[currentIndex];
  const answered = selected !== null;
  const isLast = currentIndex === questions.length - 1;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  function handleAnswer(answer) {
    if (answered) return; // ignore clicks after answering
    setSelected(answer);
    if (answer === current.correctAnswer) {
      setScore(score + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      onFinish(score);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    }
  }

  function getAnswerClass(answer) {
    if (!answered) return 'answer';
    if (answer === current.correctAnswer) return 'answer correct';
    if (answer === selected) return 'answer wrong';
    return 'answer dimmed';
  }

  return (
    <div className="quiz">
      <div className="quiz-top">
        <span>
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span>Score: {score}</span>
      </div>

      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <p className="meta">
        {current.category} · {current.difficulty}
      </p>
      <h2 className="question">{current.question}</h2>

      <div className="answers">
        {current.answers.map((answer) => (
          <button
            key={answer}
            className={getAnswerClass(answer)}
            onClick={() => handleAnswer(answer)}
            disabled={answered}
          >
            {answer}
          </button>
        ))}
      </div>

      {answered && (
        <>
          <p className={selected === current.correctAnswer ? 'feedback good' : 'feedback bad'}>
            {selected === current.correctAnswer
              ? 'Correct!'
              : `Wrong. The correct answer is: ${current.correctAnswer}`}
          </p>
          <button className="primary" onClick={handleNext}>
            {isLast ? 'See results' : 'Next question'}
          </button>
        </>
      )}
    </div>
  );
}

export default QuizScreen;