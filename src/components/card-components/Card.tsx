import Rating from "./Rating";
import FavoritesButton from "./FavoritesButton";
import MediaTitle from "./MediaTitle";
import CardImage from "./CardImage";
import useShowStore from "@/hooks/use-media-store";
import MediaType from "./MediaType";
import useMediaDetails from "@/hooks/use-media-details";

interface CardProps {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  media_type: string;
}

const Card = ({
  id,
  name,
  poster_path,
  vote_average,
  media_type: rawMediaType,
}: CardProps) => {
  const setSelectedShow = useShowStore((state) => state.setSelectedShow);

  const media_type = ["tv", "movie"].includes(rawMediaType)
    ? (rawMediaType as "tv" | "movie")
    : "movie";

  const { data: showData, isLoading, error } = useMediaDetails(id, media_type);

  const handleCardClick = () => {
    if (!isLoading && !error && showData) {
      console.log("Show clicked:", showData);
      setSelectedShow(showData as any);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <CardImage
        poster_path={poster_path}
        name={name}
        id={id}
        media_type={media_type}
        handleCardClick={handleCardClick}
      />
      <div className="p-6">
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-col">
            <MediaTitle
              name={name}
              id={id}
              media_type={media_type}
              handleCardClick={handleCardClick}
            />
            <MediaType media_type={media_type} />
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
