import HighestRatedSeriesGrid from "@/components/content-grids/series/HighestRatedSeriesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const SeriesContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Top Rated" />
      <HighestRatedSeriesGrid />
    </>
  );
};

export default SeriesContent;
