import HighestRatedMoviesGrid from "@/components/content-grids/movies/HighestRatedMoviesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingMoviesGrid from "@/components/content-grids/movies/TrendingMoviesGrid";

const MovieContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Trending" />
      <TrendingMoviesGrid />
      <GridHeading title="Highest Rated" />
      <HighestRatedMoviesGrid />
    </>
  );
};

export default MovieContent;
