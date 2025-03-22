import { Link } from "react-router-dom";
import "../style.css";
import homeIcon from "../Quote Quest poster.png";
export const HomepageTitle = () => {
  return (
    <div>
      {/* Home Button */}
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-button" />
      </Link>
      <div className="title">
        {" "}
        <h2>Quote Quest</h2>
        <p>
          Those who Quote shape the world. Want to know who's shaping your
          world?
        </p>
      </div>
      <button className="GamestartBtn">
        <Link to="/Quest">Quest Start</Link>
      </button>
      <button className="QOTBtn">
        <Link to="/DailyQuote">Quote of the Day</Link>
      </button>
    </div>
  );
};

export default HomepageTitle;
