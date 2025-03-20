import { useEffect, useState } from "react";
import { multipleQuotes } from "../Adapters/quoteAdapters";

export const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const data = await multipleQuotes();

      if (data) {
        setQuotes(data);
      } else {
        setError("Unexpected API response format.");
      }
    };

    doFetch();
  }, []);

  if (error) return <div>Error loading quotes: {error}</div>;
  //if (!quotes.length) return <div>Loading quotes...</div>;

  return (

      
      <div>
    <h2>Quotes List</h2>
    <ul>
      {quotes.map((quote, index) => (
          <li key={index}>
          <p>"{quote.q}"</p>
          <p>- {quote.a}</p>
        </li>
      ))}
    </ul>
  </div>
    )
};

export default QuoteList;
