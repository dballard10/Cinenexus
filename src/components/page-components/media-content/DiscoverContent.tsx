import PopularGrid from "@/components/content-grids/discover/PopularGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const DiscoverContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Trending" />
      <PopularGrid />
    </>
  );
};

export default DiscoverContent;
