import React from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import { Box } from "@mui/material";
import CityContextProvider from "./context/CityContextProvider";

const App: React.FC = () => {
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
