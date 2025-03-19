import PopularGrid from "@/components/content-grids/discover/PopularGrid";
import HighestRatedGrid from "@/components/content-grids/discover/HighestRatedGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const DiscoverContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What's Hot" />
      <PopularGrid />
      <GridHeading title="Top Rated" />
      <HighestRatedGrid />
    </>
  );
};

export default DiscoverContent;
