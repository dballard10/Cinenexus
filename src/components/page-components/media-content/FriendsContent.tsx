import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingGrid from "@/components/content-grids/discover/TrendingGrid";

const FriendsContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What your friends are watching" />
      <TrendingGrid />
    </>
  );
};

export default FriendsContent;
