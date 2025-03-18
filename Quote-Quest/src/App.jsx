import "./App.css";
import QuoteOfToday from "./components/DailyQuote";
import { HomepageTitle } from "./components/homepage";
function App() {
  return (
    <>
      <HomepageTitle></HomepageTitle>
      <QuoteOfToday></QuoteOfToday>
    </>
  );
}

export default App;
