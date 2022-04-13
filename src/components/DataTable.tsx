import { Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getStocks } from "../services";
import WeatherGrid from "./WeatherGrid";

const DataTable = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [formInput, setformInput] = useState<string>("");
  const [forecast, setForecast] = useState<Array<any>>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getStocks(formInput).then((response) => {
      setCities([...cities, response.location.name]);
      setForecast([...forecast, response.forecast.forecastday]);
      console.log(response.location.name, response.forecast.forecastday);

      setformInput("");
    });
  };

  console.log(forecast);

  return (
    <div>
      <Typography variant="h3" align="center">
        Weather Forecast
      </Typography>
      <Box>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="city_input"></label>
          <input
            id="city_input"
            type="text"
            value={formInput}
            onChange={handleOnChange}
          />
          <Button type="submit">Select City</Button>
        </form>
      </Box>
      {cities.map((city) => {
        return (
          <WeatherGrid
            key={city}
            setCities={setCities}
            cities={cities}
            forecast={forecast}
            city={city}
          ></WeatherGrid>
        );
      })}
    </div>
  );
};

export default DataTable;
