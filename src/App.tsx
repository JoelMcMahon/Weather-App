import React, { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import { Box } from "@mui/material";
import CityContextProvider from "./context/CityContextProvider";
import LanguageContextProvider from "./context/LanguageContextProvider";
import ToolTipContextProvider from "./context/ToolTipContextProvider";

const App: React.FC = () => {
  return (
    <ToolTipContextProvider>
      <LanguageContextProvider>
        <CityContextProvider>
          <Box className="App">
            <Box className="main_container">
              <DataTable></DataTable>
            </Box>
          </Box>
        </CityContextProvider>
      </LanguageContextProvider>
    </ToolTipContextProvider>
  );
};

export default App;
