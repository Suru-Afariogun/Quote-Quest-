import { useState, useEffect } from "react";
import { dailyQuote } from "../Adapters/quoteAdapters";
import "../style.css";
import "../style.css";
import { Link } from "react-router-dom";
import homeIcon from "../Quote Quest poster.png";
export const QuoteOfToday = () => {
  const [quote, setQuote] = useState("");
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

  if (error)
    return <div className="error">Error loading quote: {error.message}</div>;
  if (!quote) return <div>Loading quote...</div>;

  return (
    <div>
      {/* Home Button */}
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-button" />
      </Link>

      <div className="dailyquote">
        <h2>{quote?.q}</h2>
        <p>-{quote?.a}</p>
      </div>
    </div>
  );
};

export default QuoteOfToday;
