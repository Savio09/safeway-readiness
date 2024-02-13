/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  DirectionsRenderer,
} from "@react-google-maps/api";

import LocationMarker from "./LocationMarker";

const NATURAL_EVENT_WILDFIRE = 8;
const DANGER_ZONE_THRESHOLD = 1000;

const Map = ({ eventData, isLoaded }) => {
  const circleColors = ["#FF0000", "#FFFF00", "#008000"]; // Red, Yellow, Green
  const [center, setCenter] = useState({ lat: 43, lng: -80 });
  const [nearestMarker, setNearestMarker] = useState(null);
  const [inDangerZone, setInDangerZone] = useState(false);
  const [map, setMap] = useState(null);
  const [safeLocations, setSafeLocations] = useState([]); // State for safe locations
  const [selectedRoute, setSelectedRoute] = useState(null); // State for selected route

  useEffect(() => {
    if ("geolocation" in navigator && isLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(userLocation);
          findNearestMarker(userLocation, eventData);
          if (inDangerZone) {
            findRoutesToSafeLocations(userLocation);
          }
        },
        (error) => {
          console.error("Error fetching user location:", error);
        }
      );
    }
  }, [eventData, isLoaded, inDangerZone]);

  const findRoutesToSafeLocations = (userLocation) => {
    const DirectionsService = new google.maps.DirectionsService();
    const simulatedSafeLocations = [
      {
        lat: userLocation.lat + 0.005,
        lng: userLocation.lng + 0.005,
        name: "Hotel North",
      },
      {
        lat: userLocation.lat - 0.005,
        lng: userLocation.lng - 0.005,
        name: "Hotel South",
      },
      {
        lat: userLocation.lat + 0.005,
        lng: userLocation.lng - 0.005,
        name: "Hotel East",
      },
    ];

    setSafeLocations(simulatedSafeLocations); // Store simulated safe locations
  };

  const handleLocationClick = (location) => {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: center,
        destination: location,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setSelectedRoute(result); // Set the selected route to display on the map
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  const findNearestMarker = (userLocation, events) => {
    let nearest = null;
    let minDistance = Infinity;

    events.forEach((ev) => {
      if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          ev.geometries[0].coordinates[1],
          ev.geometries[0].coordinates[0]
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearest = {
            ...ev,
            distance,
          };
        }
      }
    });

    setNearestMarker(nearest);
    setInDangerZone(minDistance <= DANGER_ZONE_THRESHOLD);
  };

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000; // Distance in meters
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GoogleMap
        mapContainerClassName="google-maps"
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "80vh" }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {/* User's location marker */}
        <Marker position={center} />

        {/* Render markers for each natural disaster event */}
        {eventData
          .filter((ev) => ev.categories[0].id === NATURAL_EVENT_WILDFIRE)
          .map((ev, index) => (
            <LocationMarker
              key={index}
              lat={ev.geometries[0].coordinates[1]}
              lng={ev.geometries[0].coordinates[0]}
              onClick={() => console.log({ id: ev.id, title: ev.title })}
            />
          ))}

        {/* Render concentric safety circles if in a danger zone */}
        {inDangerZone &&
          nearestMarker &&
          circleRadii.map((radius, index) => (
            <Circle
              key={index}
              center={center}
              radius={radius}
              options={{
                strokeColor: circleColors[index],
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: circleColors[index],
                fillOpacity: 0.35,
              }}
            />
          ))}

        {/* DirectionsRenderer to show the route */}
        {selectedRoute && <DirectionsRenderer directions={selectedRoute} />}
        <span
          class="material-symbols-outlined recenter"
          onClick={() => map.panTo(center)}
        >
          my_location
        </span>
      </GoogleMap>

      <div>
        {inDangerZone ? (
          <div className="routes-title">
            <h1 style={{ color: "red" }}>You're in a danger zone!</h1>
            <h2>Suggested Safe Locations:</h2>
            <ul>
              {safeLocations.map((location, index) => (
                <li key={index} onClick={() => handleLocationClick(location)}>
                  {location.name} - Coordinates: {location.lat}, {location.lng}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="routes-title">
            <h1 style={{ color: "green" }}>
              You're Safe. Not in a danger zone
            </h1>
            <p>Not in danger zone.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
