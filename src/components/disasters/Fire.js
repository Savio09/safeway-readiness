import { useEffect, useState } from "react";

const Fire = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://data.sfgov.org/resource/ri9p-p4mm.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to see the structure
        // Process and set the data in state here
        setRecords(data); // Assuming `data` is the array of records from the API
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="grid">
      {records.map((record, index) => (
        <div key={index} className="grid-item">
          <div className="title">
            <p>City: {record.city}</p>
            <p>Station area: {record.station_area}</p>
          </div>

          <p>Address: {record.address}</p>
          <p>Property use: {record.property_use}</p>
          <strong>
            Number of fatalities: {record.civilian_fatalities} and the number of
            sustained injuries: {record.civilian_injuries}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default Fire;
