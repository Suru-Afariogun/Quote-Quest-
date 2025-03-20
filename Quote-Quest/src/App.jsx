import "./App.css";
import QuoteOfToday from "./components/DailyQuote";
import RenderHome from "./Pages/home";
// import renderHome from "./Pages/home"
import RenderDailyQuote from "./Pages/Daily";
import RenderQuest from "./Pages/Quest";
//import QuoteList from "./components/QuoteList";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      {/* <HomepageTitle />
      <Quest /> */}
      <Routes>
        <Route path="/" element={<RenderHome />}></Route>
        <Route path="/DailyQuote" element={<RenderDailyQuote />}></Route>
        <Route path="/Quest" element={<RenderQuest />}></Route>
      </Routes>
    </>
  );
};

export default App;
