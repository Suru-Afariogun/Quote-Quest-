import { handleFetch } from "./fetchData";

export const oneQuote = () => {
  return handleFetch("https://zenquotes.io/api/random/[your_key]");
};

export const multipleQuotes = () => {
  return handleFetch("https://zenquotes.io/api/quotes/[your_key]");
};

export const dailyQuote = async () => {
  const [data, error] = await handleFetch(`/api/api/today/[your_key]`);

  if (error) {
    console.error("Failed to fetch daily quote:", error);
    return null; // Return null if error occurs
  }

  console.log("Daily Quote:", data);
  return data;
};

export const yesOrNo = () => {
  return handleFetch("https://yesno.wtf/api");
};
