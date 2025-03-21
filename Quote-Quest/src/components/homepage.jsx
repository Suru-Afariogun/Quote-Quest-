import { Link } from "react-router-dom";
import "../style.css";
export const HomepageTitle = () => {
  return (
    <div>
      <div className="title">
        {" "}
        <h2>Quote Quest</h2>
        <p>
          Those who Quote shape the world. Want to know who's shaping your
          world?
        </p>
      </div>
      <div>
        <button className="GamestartBtn">
          <Link to="/Quest">Quest Start</Link>
        </button>
        <button className="QOTBtn">
          <Link to="/DailyQuote">Quote of the Day</Link>
        </button>
      </div>
    </div>
  );
};
export default HomepageTitle;
