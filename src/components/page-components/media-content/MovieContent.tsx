import HighestRatedMoviesGrid from "@/components/content-grids/movies/HighestRatedMoviesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingMoviesGrid from "@/components/content-grids/movies/TrendingMoviesGrid";
import useShowStore from "@/hooks/use-media-store";
import FilteredMediaGrid from "@/components/content-grids/FilteredMediaGrid";

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
          <GridHeading title="Trending" />
          <TrendingMoviesGrid />
          <GridHeading title="Highest Rated" />
          <HighestRatedMoviesGrid />
        </>
      )}
    </>
  );
};

export default MovieContent;
