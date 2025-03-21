import CardSkeletons from "@/components/skeletons/CardSkeletons";
import CardGrid from "../../card-components/CardGrid";
import { Media } from "@/entities/media";
import useHighestRatedSeries from "@/hooks/series/use-highest-rated-series";

const HighestRatedSeriesGrid = () => {
  const { data: shows, isLoading, error } = useHighestRatedSeries();

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default HighestRatedSeriesGrid;
