import PopularGrid from "@/components/content-grids/discover/PopularGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const SeriesContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Series" />
      <PopularGrid />
    </>
  );
};

export default SeriesContent;
