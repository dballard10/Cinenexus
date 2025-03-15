interface ShowImagesProps {
  image: string;
  title: string;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const ShowImages = ({ image, title }: ShowImagesProps) => {
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${IMAGE_BASE_URL}${image}`;

  return (
    <div className="grid grid-cols-2 gap-3">
      <img src={fullImageUrl} alt={title} className="rounded-lg" />
    </div>
  );
};

export default ShowImages;
