import Card from "./Card";
import { Media } from "../../entities/media";

interface CardGridProps {
  media: Media[];
}

const CardGrid = ({ media: shows }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {shows.map((show, index) => (
        <Card
          key={`${show.id}-${index}`}
          id={show.id}
          name={show.name}
          backdrop_path={show.backdrop_path}
          media_type={show.media_type as "tv" | "movie"}
        />
      ))}
    </div>
  );
};

export default CardGrid;
