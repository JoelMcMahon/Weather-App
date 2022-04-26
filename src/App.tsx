import React, { useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import DataTable from "./components/DataTable";
import { Box } from "@mui/material";
import CityContextProvider, {
  useCityContext,
} from "./context/CityContextProvider";

const App: React.FC = () => {
  const { city } = useCityContext();

  return (
    <CityContextProvider>
      <Box className="App">
        {/* <Appbar></Appbar> */}
        <Box className="main_container">
          <DataTable></DataTable>
        </Box>
      </Box>
    </CityContextProvider>
  );
};

export default App;
