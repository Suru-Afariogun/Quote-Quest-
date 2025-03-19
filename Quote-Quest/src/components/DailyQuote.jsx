import { useState, useEffect } from "react";
import { dailyQuote } from "../Adapters/quoteAdapters";


export const QuoteOfToday = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const [data, fetchError] = await dailyQuote();
      if (fetchError) {
        setError(fetchError);
        return;
      }
      setQuote(data);
      console.log("Fetched Quote:", data);
    };

    doFetch();
  }, []);

  if (error) return <div>Error loading quote: {error.message}</div>;
  if (!quote) return <div>Loading quote...</div>;

  return (
    <div>
      <h2>{quote?.q}quote</h2>
      <p>{quote?.a}author</p>
    </div>
  );
};

export default QuoteOfToday;

