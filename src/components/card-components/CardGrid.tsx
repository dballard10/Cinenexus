import Card from "./Card";
import { Media } from "../../entities/media";

interface CardGridProps {
  media: Media[];
}

const CardGrid = ({ media: shows }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shows.map((show, index) => (
        <Card
          key={`${show.id}-${index}`}
          id={show.id}
          name={show.name}
          poster_path={show.poster_path}
          vote_average={show.vote_average}
          media_type={show.media_type as "tv" | "movie"}
        />
      ))}
    </div>
  );
};

export default CardGrid;
