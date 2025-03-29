import FilteredMediaGrid from "@/components/content-grids/FilteredMediaGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import MediaGrid from "@/components/content-grids/MediaGrid";
import SearchBar from "@/components/filters/SearchBar";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";
import useShowStore from "@/hooks/use-media-store";

const DiscoverContent = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.movieIds.length > 0 ||
      selectedGenres.tvIds.length > 0 ||
      selectedPlatforms.platformIds.length > 0 ||
      selectedSort.id_desc !== "" ? (
        <>
          <GridHeading title="Movies & Series" />
          <FilteredMediaGrid media_type="movie" />
        </>
      ) : (
        <>
          <GridHeading title="Trending" />
          <MediaGrid useMediaHook={useTrendingMovies} />
        </>
      )}
    </>
  );
};

export default DiscoverContent;
