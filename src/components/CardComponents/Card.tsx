import Rating from "./Rating";
import FavoritesButton from "./FavoritesButton";
import ShowTitle from "./ShowTitle";
import CardImage from "./CardImage";

interface CardProps {
  id?: number;
  name: string;
  poster_path: string;
  vote_average: number;
  media_type: "tv" | "movie";
}

const Card = ({
  id = 0,
  name,
  poster_path,
  vote_average,
  media_type,
}: CardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <a href={`/shows/${id}`}>
        <CardImage poster_path={poster_path} />
      </a>
      <div className="p-6">
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-col">
            <ShowTitle name={name} />
            <div className="text-sm text-gray-400 mt-1">
              {media_type === "tv" ? "Show" : "Movie"}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Rating rating={vote_average} />
            <FavoritesButton showId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
