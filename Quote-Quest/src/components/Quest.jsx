import { useState, useEffect, useRef } from "react";
import { QuoteList } from "./QuoteList";
import { multipleQuotes, oneQuote } from "../Adapters/quoteAdapters";
//const data = multipleQuotes();
//const data = {QuoteList}

export const Quest = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [currentChoices, setChoices] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState("");
  const timeoutRef = useRef(null);
  const ErrorQuote = (
    <h6>
      "The two most powerful warriors are patience and time." - Leo Tolstoy
    </h6>
  );

  // Ensure score persists across refreshes
  useEffect(() => {
    if (!sessionStorage.getItem("score")) {
      sessionStorage.setItem("score", "0");
    }
  }, []);

  useEffect(() => {
    multipleQuotes()
      .then(setChoices)
      .catch(() => setError("Failed to fetch choices."));
    oneQuote()
      .then((data) => setCurrentQuote(data[0]))
      .catch(() => setError("Loading... Patience is key"));
  }, []);

  useEffect(() => {
    if (error === "Loading... Patience is key") {
      timeoutRef.current = setTimeout(() => {
        window.location.reload();
      }, 30000);

      return () => clearTimeout(timeoutRef.current);
    }
  }, [error]);

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

  const upScore = () => {
    let currentScore = parseInt(sessionStorage.getItem("score"), 10);
    sessionStorage.setItem("score", currentScore + 1);
  };

  useEffect(() => {
    if (selectedAnswer === currentQuote?.a) {
      upScore();
      timeoutRef.current = setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }, [selectedAnswer, currentQuote]);

  const handleAnswerClick = (author) => {
    setSelectedAnswer(author);
  };

  if (error)
    return (
      <div>
        {error}
        {ErrorQuote}
      </div>
    );
  if (!currentQuote || options.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="highscore">Score: {sessionStorage.getItem("score")}</h3>
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
    </div>
  );
};

export default Quest;
