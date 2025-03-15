import CardGrid from "../card-components/CardGrid";
import { favoriteShows } from "../../data/favorite-shows";
import { Media } from "../../entities/media";

const FavoritesGrid = () => {
  return (
    <div>
      <CardGrid media={favoriteShows as Media[]} />
    </div>
  );
};

export default FavoritesGrid;
