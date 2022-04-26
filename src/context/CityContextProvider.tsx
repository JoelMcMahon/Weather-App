import React, { useContext, createContext, useState } from "react";
import { ICityContext } from "../interfaces/interfaces";

export const CityContext = createContext<ICityContext>({
  city: { name: "", forecast: [] },
  setCity: () => {},
});

export const useCityContext = () => useContext(CityContext);

const CityContextProvider: React.FC = ({ children }) => {
  const [city, setCity] = useState<ICityContext["city"]>({
    name: "",
    forecast: [],
  });

  const value = {
    city,
    setCity,
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

export default CityContextProvider;
