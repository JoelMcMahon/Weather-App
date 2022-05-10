import React, { useContext, createContext, useState } from "react";
import { IFavouritesContext, ICity } from "../interfaces/interfaces";

export const FavouritesContext = createContext<IFavouritesContext>({
  favourites: [],
  setFavourites: () => {},
});

export const useFavouritesContext = () => useContext(FavouritesContext);

const FavouritesContextProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState<ICity["cities"]>([]);

  const value = {
    favourites,
    setFavourites,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
