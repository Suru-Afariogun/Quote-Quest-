import { useState, useEffect } from "react";
import { QuoteList } from "./QuoteList";
import { multipleQuotes, oneQuote } from "../Adapters/quoteAdapters";
import "../style.css";
//const data = multipleQuotes();
//const data = {QuoteList}

export const Quest = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [currentChoices, setChoices] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    multipleQuotes()
      .then(setChoices)
      .catch(() => setError("Failed to fetch choices."));
    oneQuote()
      .then((data) => setCurrentQuote(data[0]))
      .catch(() => setError("Shhhh! looking for words of wisdom"));
  }, []);

  useEffect(() => {
    if (currentQuote && currentChoices.length > 0) {
      generateOptions();
    }
  }, [currentQuote, currentChoices]);

  const generateOptions = () => {
    const incorrectAuthors = currentChoices
      .filter((quote) => quote.a !== currentQuote.a)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((quote) => quote.a);

    setOptions(
      [...incorrectAuthors, currentQuote.a].sort(() => Math.random() - 0.5)
    );
  };

  const handleAnswerClick = (author) => {
    setSelectedAnswer(author);
  };

  if (error) return <div className="error">Error: {error}</div>;
  if (!currentQuote || options.length === 0)
    return <div className="load">Loading...</div>;

  return (
    <div className="question-container">
      <h2>Who said this?</h2>
      <p>"{currentQuote.q}"</p>
      <div className="options">
        {options.map((author, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(author)}
            className={`option-btn ${
              selectedAnswer === author
                ? author === currentQuote.a
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          >
            {author}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <p
          className={`result ${
            selectedAnswer === currentQuote.a ? "correct" : "wrong"
          }`}
        >
          {selectedAnswer === currentQuote.a
            ? "✅ Correct!"
            : "❌ Wrong! Try again."}
        </p>
      )}
    </div>
  );
};

export default Quest;
