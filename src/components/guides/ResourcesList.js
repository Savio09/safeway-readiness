import { Link } from "react-router-dom";
const ResourcesList = () => {
  return (
    <>
      <nav className="guide">
        <ul>
          <li>
            <Link to="earthGuide">
              <div>
                <span class="material-symbols-outlined icon">language</span>
                <p>EarthQuake (Seismic)</p>
              </div>

              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </Link>
          </li>
          <li>
            <Link to="fireGuide">
              <div>
                <span class="material-symbols-outlined icon">
                  local_fire_department
                </span>
                <p>Fire</p>
              </div>

              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </Link>
          </li>

          <li>
            <Link to="floodGuide">
              <div>
                <span class="material-symbols-outlined icon">water_drop</span>
                <p>Flood</p>
              </div>

              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </Link>
          </li>
          <li>
            <Link to="tornadoGuide">
              <div>
                <span class="material-symbols-outlined icon">air</span>
                <p>Tornado</p>
              </div>

              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </Link>
          </li>
          <li>
            <Link to="hurricaneGuide">
              <div>
                <span class="material-symbols-outlined icon">air</span>
                <p>Hurricane</p>
              </div>

              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </Link>
          </li>
          <li>
            <Link to="blizzardGuide">
              <div>
                <span class="material-symbols-outlined icon">ac_unit</span>
                <p>Blizzard</p>
              </div>

              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResourcesList;
