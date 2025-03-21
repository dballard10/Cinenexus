import CardGrid from "../../card-components/CardGrid";
import { Media } from "@/entities/media";
import useHighestRated from "@/hooks/use-highest-rated";

const HighestRatedGrid = () => {
  const { data: shows, isLoading, error } = useHighestRated();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default HighestRatedGrid;
