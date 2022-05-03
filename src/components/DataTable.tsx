import { Typography, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getForecast } from "../services";
import CityTabs from "./CityTabs";
import { useCityContext } from "../context/CityContextProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormattedMessage, useIntl } from "react-intl";
import LanguageSelector from "./LanguageSelector";
import { useLanguageContext } from "../context/LanguageContextProvider";

const DataTable = () => {
  const [formInput, setformInput] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState<boolean>(false);

  const { city, setCity } = useCityContext();
  const { locale } = useLanguageContext();

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
    getForecast(formInput, locale).then((response) => {
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
      getForecast(formInput, locale)
        .then((res) => {
          if (res.location.name) {
            setIsInputValid(true);
          }
        })
        .catch((err) => {
          setIsInputValid(false);
        });
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [formInput, isFocus, isBlur]);

  useEffect(() => {
    getForecast(city.name, locale).then((response) => {
      setCity({
        name: response.location.name,
        forecast: response.forecast.forecastday,
      });
    });
  }, [locale]);

  useEffect(() => {
    let preset;
    if (locale === "fr") {
      preset = "Paris";
    } else {
      preset = "London";
    }
    getForecast(preset, locale).then((response) => {
      setCity({
        name: response.location.name,
        forecast: response.forecast.forecastday,
      });
    });
  }, []);

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

  const intl = useIntl();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: ".5rem",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color={"white"} marginRight={3}>
            <FormattedMessage id="app.title" defaultMessage="WeatherApp" />
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
            placeholder={intl.formatMessage({ id: "app.placeholder" })}
          />

          <Button
            id="cityBtn"
            type="submit"
            disabled={isInputValid ? false : true}
          >
            <FormattedMessage
              id="app.selectCityButton"
              defaultMessage="Select City"
            />
          </Button>
        </form>
        <Box>
          <LanguageSelector />
        </Box>
      </Box>
      <Box className="error_message">
        {!isInputValid && isBlur && (
          <p>
            <FormattedMessage
              id="dataTable.errorMessage"
              defaultMessage={"Please Enter a Valid Location"}
            />
          </p>
        )}
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
