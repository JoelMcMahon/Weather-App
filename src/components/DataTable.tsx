import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getStocks } from "../services";
import WeatherGrid from "./WeatherGrid";

const DataTable = () => {
  // useEffect(() => {
  //   getStocks("London");
  // }, []);
  return (
    <div>
      <Typography variant="h3" align="center">
        Weather Forecast
      </Typography>
      <WeatherGrid></WeatherGrid>
    </div>
  );
};

export default DataTable;
