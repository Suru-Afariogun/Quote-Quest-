import "./App.css";
import QuoteOfToday from "./components/DailyQuote";
import { renderHome} from "./Pages/home";
import { Quest } from "./components/Quest";
import { QuoteList } from "./components/QuoteList";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <HomepageTitle />
      <Quest  />
      <Routes>
        <Route path="/" element={<renderHome />}></Route>
        <Route path="/DailyQuote" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
