import CardGrid from "../card-components/CardGrid";
import { Media } from "@/entities/media";
import usePopular from "@/hooks/use-popular";
import CardSkeletons from "../skeletons/CardSkeletons";

const CurrentGrid = () => {
  const { data: shows, isLoading, error } = usePopular();

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default CurrentGrid;
