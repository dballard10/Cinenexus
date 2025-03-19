import { Link } from "react-router-dom";
import Rating from "./Rating";
import FavoritesButton from "./FavoritesButton";
import ShowTitle from "./ShowTitle";
import CardImage from "./CardImage";
import useShowStore from "@/hooks/use-media-store";
import MediaType from "./MediaType";

interface CardProps {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
  vote_average: number;
  media_type: "tv" | "movie";
}

const Card = ({
  id,
  name,
  overview,
  poster_path,
  backdrop_path,
  vote_average,
  media_type,
}: CardProps) => {
  const setSelectedShow = useShowStore((state) => state.setSelectedShow);

  const handleCardClick = () => {
    const showData = {
      id: id,
      name: name,
      overview: overview,
      poster_path: poster_path,
      backdrop_path: backdrop_path,
      vote_average: vote_average,
      media_type: media_type,
    };

    console.log("Show clicked:", showData);
    setSelectedShow(showData);
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
            <ShowTitle
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
