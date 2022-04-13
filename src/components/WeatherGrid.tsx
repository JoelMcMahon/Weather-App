import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getStocks } from "../services";
import DayCard from "./DayCard";
import { ICity } from "../interfaces/interfaces";

interface IProps {
  cities: ICity["cities"];
  setCities: ICity["setCities"];
  forecast: any[];
  city: any;
}
const WeatherGrid: React.FC<IProps> = ({
  cities,
  setCities,
  forecast,
  city,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper>
            <Typography align="center">{city.name}</Typography>
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
