import TrendingGrid from "@/components/content-grids/discover/TrendingGrid";
import GenresGrid from "@/components/content-grids/GenresGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import useShowStore from "@/hooks/use-media-store";

const DiscoverContent = () => {
  const { selectedGenres } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.movieIds.length > 0 || selectedGenres.tvIds.length > 0 ? (
        <>
          <GridHeading title="Movies & Series" />
          <GenresGrid media_type="movie" />
        </>
      ) : (
        <>
          <GridHeading title="Trending" />
          <TrendingGrid />
        </>
      )}
    </>
  );
};

export default DiscoverContent;
