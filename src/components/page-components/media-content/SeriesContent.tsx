import HighestRatedSeriesGrid from "@/components/content-grids/series/HighestRatedSeriesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingSeriesGrid from "@/components/content-grids/series/TrendingSeriesGrid";

const SeriesContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="Trending" />
      <TrendingSeriesGrid />
      <GridHeading title="Top Rated" />
      <HighestRatedSeriesGrid />
    </>
  );
};

export default SeriesContent;
