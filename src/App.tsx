import React, { useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import DataTable from "./components/DataTable";
import { Box } from "@mui/material";
import CityContextProvider from "./context/CityContextProvider";

const App = () => {
  return (
    <CityContextProvider>
      <div className="App">
        {/* <Appbar></Appbar> */}
        <Box className="main_container">
          <DataTable></DataTable>
        </Box>
      </div>
    </CityContextProvider>
  );
};

export default App;
