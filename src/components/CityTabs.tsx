import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { city } from "../interfaces/interfaces";
import { useCityContext } from "../context/CityContextProvider";

const CityTabs: React.FC = () => {
  const { city, setCity } = useCityContext();
  const [value, setValue] = useState<string>("1");

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
            <Tab label={weekdays[0]} value="1" />
            <Tab label={weekdays[1]} value="2" />
            <Tab label={weekdays[2]} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{weekdays[0]}</TabPanel>
        <TabPanel value="2">{weekdays[1]}</TabPanel>
        <TabPanel value="3">{weekdays[2]}</TabPanel>
      </TabContext>
    </Box>
  );
};

export default CityTabs;
