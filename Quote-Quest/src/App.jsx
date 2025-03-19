import "./App.css";
import QuoteOfToday from "./components/DailyQuote";
import { HomepageTitle } from "./components/homepage";
import { Quest } from "./components/Quest";
import {QuoteList} from './components/QuoteList'
function App() {
  return (
    <>
      <HomepageTitle></HomepageTitle>
      
      <QuoteList></QuoteList>
    </>
  );
}

export default App;
