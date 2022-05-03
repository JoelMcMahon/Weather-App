import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { useCityContext } from "../context/CityContextProvider";
import DetailedForecast from "./DetailedForecast";
import HourlyForecast from "./HourlyForecast";
import { useLanguageContext } from "../context/LanguageContextProvider";

const CityTabs: React.FC = () => {
  const { city } = useCityContext();
  const [value, setValue] = useState<string>("0");
  const { locale } = useLanguageContext();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const weekdays = city.forecast.map((day) => {
    let dateString = day.date;
    return new Date(dateString).toLocaleString(locale, {
      weekday: "long",
    });
  });

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            {weekdays.map((weekday, i) => {
              return (
                <Tab
                  key={weekday}
                  label={weekday}
                  value={i.toString()}
                  sx={{ color: "white" }}
                />
              );
            })}
          </TabList>
        </Box>

        {weekdays.map((weekday, i) => {
          return (
            <TabPanel key={weekday} value={i.toString()}>
              <DetailedForecast value={value} />
              <br></br>
              <HourlyForecast value={value}></HourlyForecast>
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default CityTabs;
