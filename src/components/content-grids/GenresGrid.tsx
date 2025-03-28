import useShowStore from "@/hooks/use-media-store";
import useMediaByGenres from "@/hooks/use-media-by-genres";
import CardGrid from "../card-components/CardGrid";
import { Media } from "@/entities/media";
import CardSkeletons from "../skeletons/CardSkeletons";

interface GenresGridProps {
  media_type: string;
}

const GenresGrid = ({ media_type }: GenresGridProps) => {
  const { selectedGenres } = useShowStore();
  const {
    data: media,
    isLoading,
    error,
  } = useMediaByGenres(
    selectedGenres.tvIds.join("|"),
    selectedGenres.movieIds.join("|"),
    media_type
  );

  if (isLoading) return <CardSkeletons />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <CardGrid media={media as Media[]} />
    </div>
  );
};

export default GenresGrid;
