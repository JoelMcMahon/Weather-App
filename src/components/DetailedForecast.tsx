import React from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import { useCityContext } from "../context/CityContextProvider";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { WiMoonrise } from "react-icons/wi";
import { WiMoonset } from "react-icons/wi";
import { FormattedMessage } from "react-intl";

interface IProps {
  value: string;
}

const DetailedForecast: React.FC<IProps> = ({ value }) => {
  const { city } = useCityContext();

  let cityForecast = city.forecast[parseInt(value)];
  let cityDay = cityForecast.day;

  return (
    <Grid
      container
      spacing={8}
      sx={{
        display: { sm: "block", md: "block", lg: "flex" },
        fontWeight: "100",
      }}
    >
      <Grid item xs={12} lg={4}>
        <Card
          elevation={10}
          sx={{
            border: "none",
            backgroundColor: "#064663",
            color: "white",
            p: 2,
            height: "20rem",
          }}
        >
          <Typography variant="h3" align="center" margin={1} fontWeight={100}>
            {city.name}
          </Typography>
          <Typography variant="h4" align="center" fontWeight={100}>
            {cityForecast.day.avgtemp_c} ℃
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={cityForecast.day.condition.icon} alt="" />
            <Typography variant="h4" fontWeight={100}>
              {cityForecast.day.condition.text}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          elevation={10}
          sx={{
            border: "none",
            backgroundColor: "#064663",
            color: "white",
            padding: 2,
            height: "20rem",
            lineHeight: "2.5rem",
          }}
        >
          <ul>
            <li>
              <FormattedMessage
                id="detailedForecast.minTemp"
                defaultMessage={"Minimum Temperature: "}
              />
              {cityDay.mintemp_c}℃
            </li>
            <li>
              <FormattedMessage
                id="detailedForecast.maxTemp"
                defaultMessage={"Maximum Temperature: "}
              />
              {cityDay.maxtemp_c}℃
            </li>
            <li>
              <FormattedMessage
                id="detailedForecast.totalRainfall"
                defaultMessage={"Total Rainfall: "}
              />
              {cityDay.totalprecip_mm}mm
            </li>
            <li>
              <FormattedMessage
                id="detailedForecast.uvLevel"
                defaultMessage={"UV Level: "}
              />
              {cityDay.uv}
            </li>
            <li>
              <FormattedMessage
                id="detailedForecast.windSpeed"
                defaultMessage={"Maximum Wind Speed: "}
              />
              {cityDay.maxwind_kph} km/h
            </li>
            <li>
              <FormattedMessage
                id="detailedForecast.humidity"
                defaultMessage={"Average Humidity: "}
              />
              {cityDay.avghumidity}%
            </li>
            <li>
              <FormattedMessage
                id="detailedForecast.visibility"
                defaultMessage={"Average Visbility: "}
              />
              {cityDay.avgvis_km} km
            </li>
          </ul>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          elevation={10}
          sx={{
            border: "none",
            backgroundColor: "#064663",
            color: "white",
            p: 2,
            height: "20rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Grid item xs={6}>
              <Box>
                <BsSunrise />
                <FormattedMessage
                  id="detailedForecast.sunrise"
                  defaultMessage={" Sunrise:"}
                />
                <br />
                {cityForecast.astro.sunrise}{" "}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <BsSunset />
                <FormattedMessage
                  id="detailedForecast.sunset"
                  defaultMessage={" Sunset:"}
                />
                <br /> {cityForecast.astro.sunset}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <WiMoonrise />
                <FormattedMessage
                  id="detailedForecast.moonrise"
                  defaultMessage={" Moonrise:"}
                />
                <br /> {cityForecast.astro.moonset}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <WiMoonset />
                <FormattedMessage
                  id="detailedForecast.moonset"
                  defaultMessage={" Moonset:"}
                />
                <br /> {cityForecast.astro.moonrise}
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DetailedForecast;
