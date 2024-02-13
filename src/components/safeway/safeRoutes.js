import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./map";

const SafeRoutes = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
    };

    fetchEvents();
  }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div className="loadscreen">Loading..</div>;
  return (
    <div className="guides map-image">
      <div className="routes-title">
        <h1>Find your Safe Route</h1>
        <p>
          In case of an emergency, you can use the safe route to find the
          fastest and safest way to evacuate. Enter your address and we'll show
          you the best route to safety by providing real-time data on nearby
          hazards and suggesting alternative safe routes. It dynamically
          displays the nearest disaster zones, such as wildfires, and calculates
          safe evacuation paths to nearby hotels or safe locations. The
          intuitive map interface, complete with visual indicators like
          concentric safety circles and directional guidance, ensures you're
          well-informed and can make quick decisions to navigate away from
          danger.
        </p>
      </div>
      <Map eventData={eventData} isLoaded={isLoaded} />
    </div>
  );
};

export default SafeRoutes;
