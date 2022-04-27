import { Container, Grid, Paper, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCityContext } from "../context/CityContextProvider";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface IProps {
  value: string;
}

const HourlyForecast: React.FC<IProps> = ({ value }) => {
  const { city } = useCityContext();

  let cityForecast = city.forecast[parseInt(value)];

  let currentDate = new Date();
  let time = currentDate.getHours();
  console.log(time, "<<<< TIME");

  useEffect(() => {
    // const interval = setInterval(() => {
    //   let currentDate = new Date();
    //   let time = currentDate.getHours();
    //   console.log(time, "<<<< TIME");
    // }, 600000);

    let slideArray: number[] = [];

    for (let i = 0; i < 4; i++) {
      slideArray.push(time);
      time++;
    }
    setSlides(slideArray);

    // return () => clearInterval(interval);
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
    <Container>
      <Grid container spacing={1} fontSize={15}>
        <Grid item xs={2}>
          <Box
            color={"white"}
            fontSize={"6rem"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <IoIosArrowDropleft onClick={handleBackward}></IoIosArrowDropleft>
          </Box>
        </Grid>

        {slides.map((slide, i) => {
          return (
            <Grid item xs={2}>
              <Paper
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
          <Box
            color={"white"}
            fontSize={"6rem"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <IoIosArrowDropright onClick={handleForward}></IoIosArrowDropright>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HourlyForecast;
