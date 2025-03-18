import { handleFetch } from "./fetchData";

export const oneQuote = () => {
  return handleFetch("https://zenquotes.io/api/random/[your_key]");
};

export const multipleQuotes = () => {
  return handleFetch("https://zenquotes.io/api/quotes/[your_key]");
};

export const dailyQuote = () => {
  return handleFetch("https://zenquotes.io/api/today/[your_key]");
};

export const yesOrNo = () => {
  return handleFetch("https://yesno.wtf/api");
};
