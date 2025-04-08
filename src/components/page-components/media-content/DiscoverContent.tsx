import FilteredBothGrid from "@/components/media-grids/FilteredBothGrid";
import GridHeading from "@/components/media-grids/GridHeading";
import MediaGrid from "@/components/media-grids/MediaGrid";
import SearchBar from "@/components/filters/SearchBar";
import useTrending from "@/hooks/use-trending";
import useShowStore from "@/hooks/use-media-store";

const DiscoverContent = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.movieIds.length > 0 ||
      selectedGenres.tvIds.length > 0 ||
      selectedPlatforms.platformIds.length > 0 ||
      selectedSort.id_desc !== "" ? (
        <>
          <GridHeading title="Movies & Series" />
          <FilteredBothGrid />
        </>
      ) : (
        <>
          <GridHeading title="Trending" />
          <MediaGrid useMediaHook={useTrending} />
        </>
      )}
    </>
  );
};

export default DiscoverContent;
