import React, { useContext } from "react";
import { data } from "../data";
import { CountryContext } from "../countryContext";


export default function Country() {

    const { country, setCountry, continent } = useContext(CountryContext);
    return (
    <div>
      {data.continents.filter((item)=>item === continent).map((country) => (
        <p>{country.name}</p>
      ))}
    </div>
  );
}
