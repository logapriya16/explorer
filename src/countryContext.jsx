import React, { createContext, useState } from "react";
export const CountryContext = createContext();
export default function CountryProvider({ children }) {
  const [country, setCountry] = useState("");
  const [continent, setContinet] = useState("");
  const [destination, setdestination] = useState("");
  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
        continent,
        setContinet,
        destination,
        setdestination,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
