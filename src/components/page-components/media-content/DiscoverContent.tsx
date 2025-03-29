import TrendingGrid from "@/components/content-grids/discover/TrendingGrid";
import FilteredMediaGrid from "@/components/content-grids/FilteredMediaGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
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
          <FilteredMediaGrid media_type="movie" />
        </>
      ) : (
        <>
          <GridHeading title="Trending" />
          <TrendingGrid />
        </>
      )}
    </>
  );
};

export default DiscoverContent;
