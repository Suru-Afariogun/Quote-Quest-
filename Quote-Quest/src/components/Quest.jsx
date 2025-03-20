import { useState, useEffect } from "react";
import { QuoteList } from "./QuoteList";
import { multipleQuotes } from "../Adapters/quoteAdapters";
//const data = multipleQuotes();
//const data = {QuoteList}

export const Quest = ({ Quotes }) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const { questionQuotes, choices, correctAnswers } = Quotes[currentQuote];

  return (
    <div className="question-container">
      <span className="active-question">/{currentQuote + 1}</span>
      <span className="total-question">/{QuoteList.length}</span>
      <h2>{questionQuotes}</h2>
      <ul>{choices.map((answer, index) => {})}</ul>
    </div>
  );
};
export default Quest;
