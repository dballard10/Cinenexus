import Card from "./Card";
import { Show } from "../../entities/shows";

interface CardGridProps {
  shows: Show[];
}

const CardGrid = ({ shows }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shows.map((show, index) => (
        <Card
          key={`${show.title}-${index}`}
          title={show.title}
          description={show.description}
          image={show.images[0]}
          rating={show.rating}
        />
      ))}
    </div>
  );
};

export default CardGrid;
