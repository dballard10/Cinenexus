import GridHeading from "@/components/media-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import FilteredMediaGrid from "@/components/media-grids/FilteredMediaGrid";
import MediaGrid from "@/components/media-grids/MediaGrid";
import useShowStore from "@/hooks/use-media-store";
import useTrendingSeries from "@/hooks/series/use-trending-series";
import useHighestRatedSeries from "@/hooks/series/use-highest-rated-series";

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
          <GridHeading title="Trending Series" />
          <MediaGrid useMediaHook={useTrendingSeries} />
          <GridHeading title="Highest Rated Series" />
          <MediaGrid useMediaHook={useHighestRatedSeries} />
        </>
      )}
    </>
  );
};

export default SeriesContent;
