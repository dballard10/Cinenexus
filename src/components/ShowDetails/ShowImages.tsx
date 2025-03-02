interface ShowImagesProps {
  image: string;
  title: string;
}

const ShowImages = ({ image, title }: ShowImagesProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <img src={image} alt={title} className="rounded-lg" />
      <img src={image} alt={title} className="rounded-lg" />
      <img src={image} alt={title} className="rounded-lg" />
    </div>
  );
};

export default ShowImages;
