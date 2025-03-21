import CardGrid from "../../card-components/CardGrid";
import { Media } from "@/entities/media";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";

const TrendingMoviesGrid = () => {
  const { data: shows, isLoading, error } = useTrendingMovies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default TrendingMoviesGrid;
