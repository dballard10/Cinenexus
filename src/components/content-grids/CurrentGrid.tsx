import CardGrid from "../card-components/CardGrid";
import { Media } from "@/entities/media";
import usePopular from "@/hooks/use-popular";

const CurrentGrid = () => {
  const { data: shows, isLoading, error } = usePopular();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={shows as Media[]} />
    </div>
  );
};

export default CurrentGrid;
