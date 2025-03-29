import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import MediaGrid from "@/components/content-grids/MediaGrid";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";

const FriendsContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What your friends are watching" />
      <MediaGrid useMediaHook={useTrendingMovies} />
    </>
  );
};

export default FriendsContent;
