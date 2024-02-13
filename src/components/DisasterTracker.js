import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import click from "../images/click.svg";
import DisasterList from "./disasters/disasterList";
const DisasterTracker = () => {
  return (
    <div className="disasterTracker">
      <h1>Disaster Tracker</h1>
      <DisasterList />
    </div>
  );
};

export default DisasterTracker;
