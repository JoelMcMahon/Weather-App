import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getStocks } from "../services";
import DayCard from "./DayCard";
import { ICity } from "../interfaces/interfaces";
import { IDayForecast } from "./DayCard";

interface IProps {
  city: any;
}
const WeatherGrid: React.FC<IProps> = ({ city }) => {
  return (
    <Box sx={{ m: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper>
            <Typography align="center">{city.name}</Typography>
          </Paper>
        </Grid>
        {city.forecast.map(
          (singleDayForecast: IDayForecast["singleDayForecast"]) => {
            return (
              <DayCard
                key={singleDayForecast.date}
                singleDayForecast={singleDayForecast}
              />
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default WeatherGrid;
