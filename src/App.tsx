import React, { useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <div className="App">
      <Appbar></Appbar>
      <DataTable></DataTable>
    </div>
  );
};

export default App;
