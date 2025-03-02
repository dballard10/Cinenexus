import Rating from "./Rating";
import FavoritesButton from "./FavoritesButton";
import ShowTitle from "./ShowTitle";

interface CardProps {
  id?: number;
  name: string;
  backdrop_path: string;
  vote_average: number;
  type: "show" | "movie";
}

const Card = ({
  id = 0,
  name,
  backdrop_path,
  vote_average,
  type,
}: CardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <a href={`/shows/${id}`}>
        <img
          src={backdrop_path}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </a>
      <div className="p-6">
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-col">
            <ShowTitle title={name} />
            <div className="text-sm text-gray-400 mt-1">
              {type === "show" ? "Show" : "Movie"}
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
