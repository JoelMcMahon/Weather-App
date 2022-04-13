import { Card, Grid, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";

interface IDayForecast {
  singleDayForecast: {
    date: string;
    date_epoch: number;
    day: any;
    astro: object;
    hour: object;
  };
}

const DayCard: React.FC<IDayForecast> = ({ singleDayForecast }) => {
  let dateString = singleDayForecast.date;
  let weekday = new Date(dateString).toLocaleString("en-GB", {
    weekday: "long",
  });

  return (
    <Grid item xs={3}>
      <Card>
        <Typography align="center">{weekday}</Typography>
        <img
          className="center"
          src={singleDayForecast.day.condition.icon}
          alt=""
        />
        <Typography align="center">
          {singleDayForecast.day.avgtemp_c} ℃
        </Typography>
      </Card>
    </Grid>
  );
};

export default DayCard;
