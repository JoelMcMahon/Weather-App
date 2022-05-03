import { Grid, Paper, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCityContext } from "../context/CityContextProvider";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Popup from "./Popup";

interface IProps {
  value: string;
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 560,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const HourlyForecast: React.FC<IProps> = ({ value }) => {
  const { city } = useCityContext();

  let cityForecast = city.forecast[parseInt(value)];

  let currentDate = new Date();
  let time = currentDate.getHours();

  useEffect(() => {
    let slideArray: number[] = [];

    for (let i = 0; i < 4; i++) {
      slideArray.push(time);
      time++;
    }
    setSlides(slideArray);
  }, []);

  const [slides, setSlides] = useState<number[]>([0, 1, 2, 3]);

  const nextSlide = (slides: number[], direction: number): number[] => {
    return slides.map((slide) => {
      return (
        (slide + direction + cityForecast.hour.length) %
        cityForecast.hour.length
      );
    });
  };

  const handleForward = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setSlides(nextSlide(slides, 1));
  };

  const handleBackward = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setSlides(nextSlide(slides, -1));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={1} fontSize={15}>
          <Grid item xs={2}>
            <Box
              className="icon-container"
              color={"white"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {" "}
              <IoIosArrowDropleft onClick={handleBackward}></IoIosArrowDropleft>
            </Box>
          </Grid>

          {slides.map((slide, i) => {
            return (
              <Grid
                key={cityForecast.hour[slides[i]].time.slice(-5)}
                item
                xs={2}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    border: "none",
                    backgroundColor: "#064663",
                    color: "white",
                    padding: 2,
                    marginTop: 5,
                    lineHeight: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "20rem",
                  }}
                >
                  <ul>
                    <li>{cityForecast.hour[slides[i]].time.slice(-5)}</li>
                    <li>{cityForecast.hour[slides[i]].temp_c}℃</li>
                    <li>
                      <img
                        src={cityForecast.hour[slides[i]].condition.icon}
                      ></img>
                    </li>
                    <li>{cityForecast.hour[slides[i]].condition.text}</li>
                    <li>
                      <Popup value={cityForecast.hour[slides[i]]} />
                    </li>
                  </ul>
                </Paper>
              </Grid>
            );
          })}
          <Grid item xs={8} sx={{ display: { xs: "block", md: "none" } }}>
            <Paper
              elevation={10}
              sx={{
                border: "none",
                backgroundColor: "#064663",
                color: "white",
                padding: 2,
                marginTop: 5,
                lineHeight: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "20rem",
              }}
            >
              <ul>
                <li>{cityForecast.hour[slides[0]].time.slice(-5)}</li>
                <li>{cityForecast.hour[slides[0]].temp_c}℃</li>
                <li>
                  <img src={cityForecast.hour[slides[0]].condition.icon}></img>
                </li>
                <li>{cityForecast.hour[slides[0]].condition.text}</li>
                <li>
                  <Popup value={cityForecast.hour[slides[0]]} />
                </li>
              </ul>
            </Paper>
          </Grid>

          <Grid item xs={2}>
            <Box
              className="icon-container"
              color={"white"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <IoIosArrowDropright
                onClick={handleForward}
              ></IoIosArrowDropright>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HourlyForecast;
