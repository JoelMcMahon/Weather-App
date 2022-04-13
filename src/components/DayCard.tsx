import { Card, Grid, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";

interface IDayForecast {
  dayForecast: {
    date: string;
    date_epoch: number;
    day: object;
    astro: object;
    hour: object;
  };
}

const DayCard: React.FC<IDayForecast> = ({ dayForecast }) => {
  console.log(dayForecast);
  let dateString = dayForecast.date;
  let weekday = new Date(dateString).toLocaleString("en-GB", {
    weekday: "long",
  });
  console.log(weekday);
  return (
    <Grid item xs={3}>
      <Card>
        <Typography align="center">{weekday}</Typography>
      </Card>
    </Grid>
  );
};

export default DayCard;
