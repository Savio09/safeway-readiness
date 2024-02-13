import { useNavigate } from "react-router-dom";
const EarthQuakeGuide = (props) => {
  const navigate = useNavigate();
  return (
    <div className="guides">
      <div className="header-title">
        <div>
          <h1>
            <span class="material-symbols-outlined icon">{props.iconName}</span>
            <p>{props.name}</p>
          </h1>
        </div>
        <button onClick={() => navigate(-1)} className="icon">
          <span class="material-symbols-outlined">arrow_back</span>Go back
        </button>
      </div>
      <div className="content">
        <div>
          <h2 className="subtitle">{props.title_1}</h2>
          <p>{props.content_1}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_2}</h2>
          <p>{props.content_2}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_3}</h2>
          <p>{props.content_4}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_4}</h2>
          <p>{props.content_4}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_5}</h2>
          <p>{props.content_5}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_6}</h2>
          <p>{props.content_6}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_7}</h2>
          <p>{props.content_7}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_8}</h2>
          <p>{props.content_8}</p>
        </div>
        <div>
          <h2 className="subtitle">{props.title_9}</h2>
          <p>{props.content_9}</p>
        </div>
      </div>
    </div>
  );
};

export default EarthQuakeGuide;
