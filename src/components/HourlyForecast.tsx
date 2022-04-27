import { Container, Grid, Paper, Box } from "@mui/material";
import React, { useState } from "react";
import { useCityContext } from "../context/CityContextProvider";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface IProps {
  value: string;
}

const HourlyForecast: React.FC<IProps> = ({ value }) => {
  const { city } = useCityContext();

  let cityForecast = city.forecast[parseInt(value)];

  const [slides, setSlides] = useState<number[]>([0, 1, 2, 3]);

  const nextSlide = (slides: number[], direction: number): number[] => {
    return slides.map((slide) => {
      return (
        (slide + direction + cityForecast.hour.length) %
        cityForecast.hour.length
      );
    });
  };

  console.log(cityForecast.hour);

  console.log(slides);

  const handleForward = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setSlides(nextSlide(slides, 1));
  };

  const handleBackward = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSlides(nextSlide(slides, -1));
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Box onClick={handleBackward}>
            <IoIosArrowDropleft></IoIosArrowDropleft>
          </Box>
        </Grid>

        {slides.map((slide, i) => {
          return (
            <Grid item xs={2}>
              <Paper>
                <ul>
                  <li>{cityForecast.hour[slides[i]].time.slice(-5)}</li>
                  <li>{cityForecast.hour[slides[i]].temp_c}℃</li>
                  <li>
                    <img
                      src={cityForecast.hour[slides[i]].condition.icon}
                    ></img>
                  </li>
                  <li>{cityForecast.hour[slides[i]].condition.text}</li>
                </ul>
              </Paper>
            </Grid>
          );
        })}

        <Grid item xs={2}>
          <Box color={"white"} fontSize={"6rem"}>
            <IoIosArrowDropright onClick={handleForward}>
              <span></span>
            </IoIosArrowDropright>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HourlyForecast;
