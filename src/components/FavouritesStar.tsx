import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useFavouritesContext } from "../context/FavouritesContextProvider";
import { useCityContext } from "../context/CityContextProvider";
import Star from "@mui/icons-material/Star";

const FavouritesStar: React.FC = () => {
  const { favourites, setFavourites } = useFavouritesContext();
  const { city } = useCityContext();
  console.log(city);
  return <>{favourites.includes(city.name) ? <Star /> : <StarBorderIcon />}</>;
};

export default FavouritesStar;
