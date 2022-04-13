import { Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getStocks } from "../services";
import WeatherGrid from "./WeatherGrid";
import { ICity } from "../interfaces/interfaces";

const DataTable = () => {
  const [cities, setCities] = useState<ICity["cities"]>([]);
  const [formInput, setformInput] = useState<string>("");
  const [forecast, setForecast] = useState<Array<any>>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getStocks(formInput).then((response) => {
      setCities([
        ...cities,
        {
          name: response.location.name,
          forecast: response.forecast.forecastday,
        },
      ]);
      // setForecast([...forecast, response.forecast.forecastday]);

      setformInput("");
    });
  };
  console.log(cities, "<<<");

  return (
    <div>
      <Typography variant="h3" align="center">
        Weather Forecast
      </Typography>
      <Box>
        <form onSubmit={handleOnSubmit}>
          <Typography align="center">
            <label htmlFor="city_input"></label>
            <input
              id="city_input"
              type="text"
              value={formInput}
              onChange={handleOnChange}
            />

            <Button type="submit">Select City</Button>
          </Typography>
        </form>
      </Box>
      {cities.map((city) => {
        return <WeatherGrid key={city.name} city={city}></WeatherGrid>;
      })}
    </div>
  );
};

export default DataTable;
