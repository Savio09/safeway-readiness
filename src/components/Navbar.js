import logo from "../images/logos.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Safe Space</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="resourcesComponent">Resources</Link>
        </li>

        <li>
          <Link to="disasterTracker" className="cta">
            SF Disaster Tracker
          </Link>
        </li>
        <li>
          <Link to="safeRoutes" className="cta">
            Safe Routes
          </Link>
        </li>
        <li>
          <Link to="familyComponent" className="cta cta-red">
            Family Check-In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
