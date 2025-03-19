import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface CardImageProps {
  poster_path: string;
  name: string;
  id: number;
  media_type: string;
  handleCardClick: () => void;
}

const CardImage = ({
  poster_path,
  name,
  id,
  media_type,
  handleCardClick,
}: CardImageProps) => {
  const fullImageUrl = poster_path.startsWith("http")
    ? poster_path
    : `${IMAGE_BASE_URL}${poster_path}`;

  return (
    <Link
      to={`/shows/${name.toLowerCase().replace(/ /g, "-")}`}
      state={{ id: id.toString(), mediaType: media_type }}
      onClick={handleCardClick}
    >
      <img
        src={fullImageUrl}
        alt="poster"
        className="w-full h-48 object-cover rounded-t-lg"
      />
    </Link>
  );
};

export default CardImage;
