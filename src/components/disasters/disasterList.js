import { Link, Outlet } from "react-router-dom";
import click from "../../images/click.svg";
const DisasterList = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="fire">
              Fire <span class="material-symbols-outlined">expand_more</span>
            </Link>
          </li>

          <li>
            <Link to="earth">
              EarthQuake
              <span class="material-symbols-outlined">expand_more</span>
            </Link>
          </li>
          <li>
            <Link to="flood">
              Flood <span class="material-symbols-outlined">expand_more</span>
            </Link>
          </li>
          <li>
            <Link to="tornado">
              Tornado<span class="material-symbols-outlined">expand_more</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default DisasterList;
