import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { city } from "../interfaces/interfaces";
import { useCityContext } from "../context/CityContextProvider";
import DetailedForecast from "./DetailedForecast";
import HourlyForecast from "./HourlyForecast";

const CityTabs: React.FC = () => {
  const { city, setCity } = useCityContext();
  const [value, setValue] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const weekdays = city.forecast.map((day) => {
    let dateString = day.date;
    return new Date(dateString).toLocaleString("en-GB", {
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
            <TabPanel value={i.toString()}>
              <DetailedForecast value={value} />
              <HourlyForecast value={value}></HourlyForecast>
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default CityTabs;
