import Rating from "./Rating";

interface CardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
}

const Card = ({ title, description, image, rating }: CardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <div className="flex flex-row gap-3">
          <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
          <Rating rating={rating} />
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
