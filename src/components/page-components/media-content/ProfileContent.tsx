import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingGrid from "@/components/content-grids/discover/TrendingGrid";

const ProfileContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What you've been watching" />
      <TrendingGrid />
    </>
  );
};

export default ProfileContent;
