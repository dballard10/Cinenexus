import HighestRatedSeriesGrid from "@/components/content-grids/series/HighestRatedSeriesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingSeriesGrid from "@/components/content-grids/series/TrendingSeriesGrid";
import useShowStore from "@/hooks/use-media-store";
import FilteredMediaGrid from "@/components/content-grids/FilteredMediaGrid";

const SeriesContent = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.tvIds.length > 0 ||
      selectedPlatforms.platformIds.length > 0 ||
      selectedSort.id_desc !== "" ? (
        <>
          <GridHeading title="Series" />
          <FilteredMediaGrid media_type="tv" />
        </>
      ) : (
        <>
          <GridHeading title="Trending" />
          <TrendingSeriesGrid />
          <GridHeading title="Top Rated" />
          <HighestRatedSeriesGrid />
        </>
      )}
    </>
  );
};

export default SeriesContent;
