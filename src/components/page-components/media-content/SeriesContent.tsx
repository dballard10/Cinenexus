import GridHeading from "@/components/media-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import FilteredMediaGrid from "@/components/media-grids/FilteredMediaGrid";
import MediaGrid from "@/components/media-grids/MediaGrid";
import useMediaStore from "@/hooks/use-media-store";
import useTrendingSeries from "@/hooks/series/use-trending-series";
import useHighestRatedSeries from "@/hooks/series/use-highest-rated-series";
import FilterTags from "@/components/filters/FilterTags";

const SeriesContent = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useMediaStore();

  const shouldShowFiltered =
    selectedGenres.movieIds.length > 0 ||
    selectedGenres.tvIds.length > 0 ||
    selectedPlatforms.platformIds.length > 0 ||
    selectedSort.id_desc !== "";

  return (
    <>
      <SearchBar />
      {shouldShowFiltered ? (
        <>
          <GridHeading title="Series" />
          {/* <FilterTags /> */}
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
