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

export interface IToolTipContext {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  onExit: any;
}

export interface IFavouritesContext {
  favourites: string[];
  setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
}
