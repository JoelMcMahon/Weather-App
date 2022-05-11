import React, { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import { Box } from "@mui/material";
import CityContextProvider from "./context/CityContextProvider";
import LanguageContextProvider from "./context/LanguageContextProvider";
import ToolTipContextProvider from "./context/ToolTipContextProvider";
import FavouritesContextProvider from "./context/FavouritesContextProvider";

const App: React.FC = () => {
  return (
    <FavouritesContextProvider>
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
    </FavouritesContextProvider>
  );
};

export default App;
