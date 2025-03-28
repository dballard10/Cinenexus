import HighestRatedMoviesGrid from "@/components/content-grids/movies/HighestRatedMoviesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingMoviesGrid from "@/components/content-grids/movies/TrendingMoviesGrid";
import useShowStore from "@/hooks/use-media-store";
import GenresGrid from "@/components/content-grids/GenresGrid";

const MovieContent = () => {
  const { selectedGenres } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.movieIds.length > 0 ? (
        <>
          <GridHeading title="Movies" />
          <GenresGrid media_type="movie" />
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
