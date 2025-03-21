import CardSkeletons from "@/components/skeletons/CardSkeletons";
import CardGrid from "../../card-components/CardGrid";
import { Media } from "@/entities/media";
import useTrendingSeries from "@/hooks/series/use-trending-series";

const TrendingSeriesGrid = () => {
  const { data: shows, isLoading, error } = useTrendingSeries();

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default TrendingSeriesGrid;
