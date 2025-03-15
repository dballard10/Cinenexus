const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface CardImageProps {
  poster_path: string;
}

const CardImage = ({ poster_path }: CardImageProps) => {
  const fullImageUrl = poster_path.startsWith("http")
    ? poster_path
    : `${IMAGE_BASE_URL}${poster_path}`;

  return (
    <img
      src={fullImageUrl}
      alt="poster"
      className="w-full h-48 object-cover rounded-t-lg"
    />
  );
};

export default CardImage;
