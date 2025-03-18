import { useState, useEffect } from "react";
import { dailyQuote } from "../Adapters/quoteAdapters";
import handleFetch from "../Adapters/fetchData";
export const QuoteOfToday = () => {
  const [quote, setQuote] = useState();
  const [err, setErr] = useState();
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await dailyQuote();
      if (data) setQuote(data);
      if (error) setErr(error);
      console.log(data);
    };
    doFetch();
  }, []);
  return (
    <div>
      <h2>{quote[0]}</h2>
      <p>quote</p>
    </div>
  );
};
export default QuoteOfToday;
