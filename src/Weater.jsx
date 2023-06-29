import React, { useState, useEffect } from "react";
import axios from "axios";
import Bilder from "./Bilder";

export default function Weather() {
  const [search, setSearch] = useState("Turkey");
  const [city, setCity] = useState("");
  const apiKey = "65b50d15bca14d19bfc93211232706";

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=65b50d15bca14d19bfc93211232706&q=${search}&aqi=no`
        );

        setCity(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, [search]);
  console.log(search);

  return (
    <div className="card" style={{ width: "28rem" }}>
      <Bilder city={search} /> <h5>Weather Condition</h5>
      {city && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <label className="fw-bold">City</label> <br />
            {city.location.name}
          </li>
          <li className="list-group-item">
            <label className="fw-bold">Cauntry</label> <br />
            {city.location.country}
          </li>
          <li className="list-group-item">
            <label className="fw-bold">Temperature</label>
            <br />
            {city.current.temp_c}
          </li>
        </ul>
      )}
      <div className="card-body">
        <input
          type="text"
          className="form-control mt-3"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Type a city name"
        />
      </div>
    </div>
  );
}
