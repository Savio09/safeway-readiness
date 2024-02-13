import { Marker } from "@react-google-maps/api";
import fire from "../../images/fire.svg";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <Marker
      position={{ lat, lng }}
      onClick={onClick}
      icon={{
        url: fire, // Path to a custom fire icon
        scaledSize: new window.google.maps.Size(30, 30), // Adjust size
      }}
    />
  );
};

export default LocationMarker;
