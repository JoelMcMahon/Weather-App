import React from "react";
import { useFavouritesContext } from "../context/FavouritesContextProvider";

const FavouritesList: React.FC = () => {
  const { favourites } = useFavouritesContext();

  console.log(favourites);

  return (
    <>
      {favourites.map((favourite) => {
        return (
          <div key={favourite.name} className="favouriteCityPanel">
            <h4>{favourite.name}</h4>
            <p>{favourite.forecast[0].day.avgtemp_c}</p>
            <img
              src={favourite.forecast[0].day.condition.icon}
              className="favouriteCityPanel__conditionIcon"
            ></img>
          </div>
        );
      })}
    </>
  );
};

export default FavouritesList;
