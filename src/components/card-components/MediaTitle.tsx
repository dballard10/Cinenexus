import { Link } from "react-router-dom";

interface MediaTitleProps {
  name: string;
  id: number;
  media_type: string;
  handleCardClick: () => void;
}

const MediaTitle = ({
  name,
  id,
  media_type,
  handleCardClick,
}: MediaTitleProps) => {
  const link = name;

  return (
    <Link
      to={`/media/${name.toLowerCase().replace(/ /g, "-")}`}
      state={{ id: id.toString(), mediaType: media_type }}
      onClick={handleCardClick}
      className="text-xl font-semibold text-white cursor-pointer transition-transform hover:scale-105"
    >
      {name}
    </Link>
  );
};

export default MediaTitle;
