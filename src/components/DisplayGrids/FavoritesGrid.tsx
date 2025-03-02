import CardGrid from "../CardComponents/CardGrid";
import { favoriteShows } from "../../data/favorite-shows";

const FavoritesGrid = () => {
  return (
    <div>
      <CardGrid shows={favoriteShows} />
    </div>
  );
};

export default FavoritesGrid;
