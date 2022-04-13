import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getStocks } from "../services";
import DayCard from "./DayCard";

const WeatherGrid: React.FC = () => {
  const [formInput, setformInput] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [forecast, setForecast] = useState<Array<any>>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getStocks(formInput).then((response) => {
      console.log(response);
      setCity(response.location.name);
      setForecast(response.forecast.forecastday);
    });
  };

  console.log(forecast);

  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="city_input"></label>
        <input
          id="city_input"
          type="text"
          value={formInput}
          onChange={handleOnChange}
        />
        <button>submit</button>
        <Button>Select City</Button>
      </form>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper>
            <Typography align="center">{city}</Typography>
          </Paper>
        </Grid>
        {forecast.map((dayForecast) => {
          return (
            <DayCard dayForecast={dayForecast} key={dayForecast.date}></DayCard>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WeatherGrid;
