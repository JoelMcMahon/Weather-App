import { Card, Grid, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";

interface IDayForecast {
  dayForecast: {
    date: string;
    date_epoch: number;
    day: any;
    astro: object;
    hour: object;
  };
}

const DayCard: React.FC<IDayForecast> = ({ dayForecast }) => {
  let dateString = dayForecast.date;
  let weekday = new Date(dateString).toLocaleString("en-GB", {
    weekday: "long",
  });

  return (
    <Grid item xs={3}>
      <Card>
        <Typography align="center">{weekday}</Typography>
        <img className="center" src={dayForecast.day.condition.icon} alt="" />
        <Typography align="center">{dayForecast.day.avgtemp_c} ℃</Typography>
      </Card>
    </Grid>
  );
};

export default DayCard;
