import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import useTrendingMovies from "@/hooks/movies/use-trending-movies";
import MediaGrid from "@/components/content-grids/MediaGrid";

const ProfileContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What you've been watching" />
      <MediaGrid useMediaHook={useTrendingMovies} />
    </>
  );
};

export default ProfileContent;
