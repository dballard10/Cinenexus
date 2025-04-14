import { favoritesApi } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import CardSkeletons from "../skeletons/CardSkeletons";
import CardGrid from "../card-components/CardGrid";

const FavoritesGrid = () => {
  const {
    data: favorites,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => favoritesApi.getFavorites(),
  });

  console.log(favorites);

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  // Transform favorites data to extract the media objects
  const favoriteItems = favorites?.favorites?.map((item) => item.media) || [];

  return (
    <div>
      <CardGrid media={favoriteItems} />
    </div>
  );
};

export default FavoritesGrid;
