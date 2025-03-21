import HighestRatedGrid from "@/components/content-grids/movies/HighestRatedGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const MovieContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Highest Rated" />
      <HighestRatedGrid />
    </>
  );
};

export default MovieContent;
