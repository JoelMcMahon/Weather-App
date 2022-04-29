import React from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import { Box } from "@mui/material";
import CityContextProvider from "./context/CityContextProvider";
import LanguageContextProvider from "./context/LanguageContextProvider";

const App: React.FC = () => {
  return (
    <LanguageContextProvider>
      <CityContextProvider>
        <Box className="App">
          <Box className="main_container">
            <DataTable></DataTable>
          </Box>
        </Box>
      </CityContextProvider>
    </LanguageContextProvider>
  );
};

export default App;
