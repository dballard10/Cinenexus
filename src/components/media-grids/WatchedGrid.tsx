import { watchesApi } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import CardSkeletons from "../skeletons/CardSkeletons";
import CardGrid from "../card-components/CardGrid";

const WatchedGrid = () => {
  const {
    data: watched,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["watched"],
    queryFn: () => watchesApi.getWatches(),
  });

  console.log(watched);

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  // Transform favorites data to extract the media objects
  const watchedItems = watched?.watches?.map((item) => item.media) || [];

  return (
    <div>
      <CardGrid media={watchedItems} />
    </div>
  );
};

export default WatchedGrid;
