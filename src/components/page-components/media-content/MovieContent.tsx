import HighestRatedMoviesGrid from "@/components/content-grids/movies/HighestRatedMoviesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const MovieContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Highest Rated" />
      <HighestRatedMoviesGrid />
    </>
  );
};

export default MovieContent;
