import Navbar from "./Navbar";
import hero from "../images/hero.png";
import fire from "../images/fire.jpg";
import { Link } from "react-router-dom";
import DisasterNews from "./DisasterNews";
const Home = () => {
  return (
    <div>
      <div>
        <div className="hero-section">
          <img src={fire} alt="" className="hero-img" />
          <div className="overlay">
            <h1>
              Real time disaster updates, safety guidelines, evacuation routes,
              and family check-in.
            </h1>
            <Link to="#" className="cta cta-red">
              Get Started
            </Link>
          </div>
          <div className="latest">
            <h3>Latest Disaster News</h3>
            <DisasterNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
