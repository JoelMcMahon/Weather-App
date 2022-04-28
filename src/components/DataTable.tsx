import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { getStocks } from "../services";
import CityTabs from "./CityTabs";
import { useCityContext } from "../context/CityContextProvider";

const DataTable = () => {
  const [formInput, setformInput] = useState<string>("");

  const { city, setCity } = useCityContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getStocks(formInput).then((response) => {
      setCity({
        name: response.location.name,
        forecast: response.forecast.forecastday,
      });

      setformInput("");
    });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h4" color={"white"} marginRight={3}>
          WeatherApp
        </Typography>
        <form onSubmit={handleOnSubmit} className="cityInputForm">
          <label htmlFor="city_input"></label>
          <input
            id="city_input"
            type="text"
            value={formInput}
            onChange={handleOnChange}
            placeholder="Search for a City"
          />

          <Button type="submit">Select City</Button>
        </form>
      </Box>
      {city.forecast[0] && (
        <>
          <CityTabs></CityTabs>
        </>
      )}

      {/* <WeatherGrid city={city}></WeatherGrid>; */}
    </div>
  );
};

export default DataTable;
