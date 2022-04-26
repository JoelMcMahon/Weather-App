import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { useCityContext } from "../context/CityContextProvider";

interface IProps {
  value: string;
}

const DetailedForecast: React.FC<IProps> = ({ value }) => {
  const { city } = useCityContext();
  console.log(city.forecast);
  console.log(value);

  let cityForecast = city.forecast[parseInt(value)];

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <Typography>{city.name}</Typography>
          <Typography>{cityForecast.day.avgtemp_c}</Typography>
          <Typography>
            <img src={cityForecast.condition.icon} alt="" />
            {cityForecast.condition.text}
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
