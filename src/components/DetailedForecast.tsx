import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { useCityContext } from "../context/CityContextProvider";

interface IProps {
  value: string;
}

const DetailedForecast: React.FC<IProps> = ({ value }) => {
  const { city } = useCityContext();
  console.log(city);
  console.log(value);

  let cityForecast = city.forecast[parseInt(value)];

  console.log(cityForecast, "<<<< City Forecast");

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card
          sx={{ border: "none", backgroundColor: "#064663", color: "white" }}
        >
          <Typography align="center">{city.name}</Typography>
          <Typography>{cityForecast.day.avgtemp_c}</Typography>
          <Typography>
            <img src={cityForecast.day.condition.icon} alt="" />
            {cityForecast.day.condition.text}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        {/* <Card>{city.forecast[value]}</Card> */}
      </Grid>
      <Grid item xs={4}>
        <Card></Card>
      </Grid>
    </Grid>
  );
};

export default DetailedForecast;
