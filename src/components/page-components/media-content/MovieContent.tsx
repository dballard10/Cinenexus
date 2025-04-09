import GridHeading from "@/components/media-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import FilteredMediaGrid from "@/components/media-grids/FilteredMediaGrid";
import MediaGrid from "@/components/media-grids/MediaGrid";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";
import useHighestRatedMovies from "@/hooks/movies/use-highest-rated-movies";
import useMediaStore from "@/hooks/use-media-store";
import FilterTags from "@/components/filters/FilterTags";

const MovieContent = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useMediaStore();

  const shouldShowFiltered =
    selectedGenres.movieIds.length > 0 ||
    selectedPlatforms.platformIds.length > 0 ||
    selectedSort.id_desc !== "";

  return (
    <>
      <SearchBar />
      {shouldShowFiltered ? (
        <>
          <GridHeading title="Movies" />
          {/* <FilterTags /> */}
          <FilteredMediaGrid media_type="movie" />
        </>
      ) : (
        <>
          <GridHeading title="Trending Movies" />
          <MediaGrid useMediaHook={useTrendingMovies} />
          <GridHeading title="Highest Rated Movies" />
          <MediaGrid useMediaHook={useHighestRatedMovies} />
        </>
      )}
    </>
  );
};

export default MovieContent;
