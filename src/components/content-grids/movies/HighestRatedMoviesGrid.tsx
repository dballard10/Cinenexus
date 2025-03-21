import CardGrid from "../../card-components/CardGrid";
import { Media } from "@/entities/media";
import useHighestRatedMovies from "@/hooks/use-highest-rated-movies";

const HighestRatedMoviesGrid = () => {
  const { data: shows, isLoading, error } = useHighestRatedMovies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default HighestRatedMoviesGrid;
