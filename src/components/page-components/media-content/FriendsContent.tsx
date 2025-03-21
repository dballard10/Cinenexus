import CurrentGrid from "@/components/content-grids/CurrentGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const FriendsContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What your friends are watching" />
      <CurrentGrid />
      <GridHeading title="Your friends' favorite shows" />
    </>
  );
};

export default FriendsContent;
