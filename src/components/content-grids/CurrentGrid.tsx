import CardGrid from "../card-components/CardGrid";
import { Media } from "@/entities/media";
import useTrending from "@/hooks/use-trending";
import CardSkeletons from "../skeletons/CardSkeletons";

const CurrentGrid = () => {
  const { data: shows, isLoading, error } = useTrending();

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default CurrentGrid;
