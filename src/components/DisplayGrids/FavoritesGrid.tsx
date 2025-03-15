import CardGrid from "../CardComponents/CardGrid";
import { favoriteShows } from "../../data/favorite-shows";
import { Media } from "../../entities/shows";

const FavoritesGrid = () => {
  return (
    <div>
      <CardGrid shows={favoriteShows as Media[]} />
    </div>
  );
};

export default FavoritesGrid;
