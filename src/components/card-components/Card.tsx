import FavoritesButton from "./FavoritesButton";
import MediaTitle from "./MediaTitle";
import CardImage from "./CardImage";
import useMediaStore from "@/hooks/use-media-store";
import MediaType from "./MediaType";
import useMediaDetails from "@/hooks/media-details/use-media-details";
import WatchedButton from "./WatchedButton";

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
  const setSelectedShow = useMediaStore((state) => state.setSelectedShow);

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
    <div className="relative group bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <CardImage
        backdrop_path={backdrop_path}
        name={name}
        id={id}
        media_type={media_type}
        handleCardClick={handleCardClick}
      />
      <div className="absolute top-2 left-2 z-10 opacity-0 rounded-full bg-black/70 shadow group-hover:opacity-100 transition-opacity duration-300">
        <WatchedButton showId={id} />
      </div>
      <div className="absolute top-2 right-2 z-10 opacity-0 rounded-full bg-black/70 shadow group-hover:opacity-100 transition-opacity duration-300">
        <FavoritesButton showId={id} />
      </div>
      <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full p-2 bg-black bg-opacity-80">
          <div className="flex flex-row justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
