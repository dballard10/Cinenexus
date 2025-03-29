import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import FilteredMediaGrid from "@/components/content-grids/FilteredMediaGrid";
import MediaGrid from "@/components/content-grids/MediaGrid";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";
import useHighestRatedMovies from "@/hooks/movies/use-highest-rated-movies";
import useShowStore from "@/hooks/use-media-store";

const MovieContent = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.movieIds.length > 0 ||
      selectedPlatforms.platformIds.length > 0 ||
      selectedSort.id_desc !== "" ? (
        <>
          <GridHeading title="Movies" />
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
