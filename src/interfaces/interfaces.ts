import React from "react";

export type city = {
  name: string;
  forecast: any[];
};

export interface ICity {
  cities: city[];
  setCities: React.Dispatch<React.SetStateAction<city[]>>;
}

export interface ICityContext {
  city: city;
  setCity: React.Dispatch<React.SetStateAction<city>>;
}
