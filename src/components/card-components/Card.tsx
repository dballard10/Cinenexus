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
  backdrop_path: string;
  media_type: string;
}

const Card = ({
  id,
  name,
  backdrop_path,
  media_type: rawMediaType,
}: CardProps) => {
  const setSelectedShow = useShowStore((state) => state.setSelectedShow);

  const media_type = ["tv", "movie"].includes(rawMediaType)
    ? (rawMediaType as "tv" | "movie")
    : "movie";

  const { data: showData, isLoading, error } = useMediaDetails(id, media_type);

  const handleCardClick = () => {
    if (!isLoading && !error && showData) {
      console.log("showData", showData);
      setSelectedShow(showData as any);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <CardImage
        backdrop_path={backdrop_path}
        name={name}
        id={id}
        media_type={media_type}
        handleCardClick={handleCardClick}
      />
      <div className="p-2">
        <div className="flex flex-row justify-between mb-2">
          <div className="flex flex-col gap-1">
            <MediaTitle
              name={name}
              id={id}
              media_type={media_type}
              handleCardClick={handleCardClick}
            />
            <div className="flex flex-row gap-4">
              <MediaType media_type={media_type} />
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <FavoritesButton showId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
