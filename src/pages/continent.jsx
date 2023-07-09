import React, { useContext } from "react";
import { data } from "../data";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { CountryContext } from "../countryContext";
export default function Continent() {
  const navigate = useNavigate();
  const { setContinet } = useContext(CountryContext);
  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top Continents for your next Holiday </h2>
      <ul className="flex-div">
        {data.continents.map((continent) => (
          <li
            type="none"
            className="flex-item"
            onClick={() => {navigate("/country");setContinet(continent.name)}}
          >
            <img src={continent.image} alt="" height="400px" />
          </li>
        ))}
      </ul>
    </div>
  );
}
