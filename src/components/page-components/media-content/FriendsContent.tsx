import GridHeading from "@/components/media-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import MediaGrid from "@/components/media-grids/MediaGrid";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";
import FilterTags from "@/components/filters/FilterTags";

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
