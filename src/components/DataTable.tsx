import { Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getStocks } from "../services";
import WeatherGrid from "./WeatherGrid";
import { city } from "../interfaces/interfaces";
import CityTabs from "./CityTabs";
import { useCityContext } from "../context/CityContextProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const DataTable = () => {
  const [formInput, setformInput] = useState<string>("");
  const [forecast, setForecast] = useState<Array<any>>([]);

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
      // setForecast([...forecast, response.forecast.forecastday]);

      setformInput("");
    });
  };

  const theme = createTheme();

  theme.typography.h4 = {
    "@media (min-width:600px)": {
      marginBottom: "1rem",
      fontSize: "2rem",
    },
  };

  return (
    <div>
      {/* <Typography variant="h3" align="center">
        Weather Forecast
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color={"white"} marginRight={3}>
            WeatherApp
          </Typography>
        </ThemeProvider>
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
