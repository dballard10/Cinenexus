import { Show } from "../../entities/shows";
import FavoritesButton from "../CardComponents/FavoritesButton";
import Rating from "../CardComponents/Rating";
import ShowImages from "./ShowImages";

interface ShowDetailsProps {
  show: Show;
}

const ShowDetails = ({ show }: ShowDetailsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex gap-2 pb-2">
          <FavoritesButton showId={show.id} />
          <Rating rating={show.vote_average} />
        </div>
        <p className="text-2xl font-bold">{show.overview}</p>
      </div>
      <div className="bg-gray-900 rounded-lg p-4">
        <ShowImages image={show.backdrop_path} title={show.name} />
      </div>
    </div>
  );
};

export default ShowDetails;
