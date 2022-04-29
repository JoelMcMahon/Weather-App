import { Typography, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getStocks } from "../services";
import CityTabs from "./CityTabs";
import { useCityContext } from "../context/CityContextProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const DataTable = () => {
  const [formInput, setformInput] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState<boolean>(false);

  const { city, setCity } = useCityContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformInput(e.target.value);
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsBlur(true);
    setIsFocus(false);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getStocks(formInput).then((response) => {
      setCity({
        name: response.location.name,
        forecast: response.forecast.forecastday,
      });

      setformInput("");
      setIsInputValid(false);
      setIsBlur(false);
    });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      getStocks(formInput)
        .then((res) => {
          if (res.location.name) {
            setIsInputValid(true);
          }
        })
        .catch((err) => {
          setIsInputValid(false);
          // setIsBlur(true);
        });
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [formInput, isFocus, isBlur]);

  const theme = createTheme();

  theme.typography.h4 = {
    "@media (min-width:600px)": {
      marginBottom: "0.5rem",
      fontSize: "2rem",
    },
    "@media (min-width:350px)": {
      marginBottom: "0.5rem",
      fontSize: "2rem",
    },
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "1rem",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color={"white"} marginRight={3}>
            WeatherApp
          </Typography>
        </ThemeProvider>
        <form onSubmit={handleOnSubmit} className="cityInputForm">
          <label htmlFor="city_input"></label>
          <input
            id="city_input"
            className={
              !isInputValid && isBlur
                ? "invalid_input"
                : isInputValid && isFocus
                ? "valid_input"
                : "unselected"
            }
            type="text"
            value={formInput}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            placeholder="Search for a City"
          />

          <Button type="submit" disabled={isInputValid ? false : true}>
            Select City
          </Button>
        </form>
      </Box>
      <Box className="error_message">
        {!isInputValid && isBlur && <p>Please Enter a Valid City</p>}
      </Box>
      {city.forecast[0] && (
        <>
          <CityTabs></CityTabs>
        </>
      )}
    </div>
  );
};

export default DataTable;
