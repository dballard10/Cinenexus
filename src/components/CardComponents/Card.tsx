import Rating from "./Rating";
import FavoritesButton from "./FavoritesButton";
import ShowTitle from "./ShowTitle";

interface CardProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  rating: number;
}

const Card = ({ id = 0, title, description, image, rating }: CardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <a href={`/shows/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </a>
      <div className="p-6">
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-row gap-3">
            <ShowTitle title={title} />
            <Rating rating={rating} />
          </div>
          <FavoritesButton showId={id} />
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
