import HighestRatedSeriesGrid from "@/components/content-grids/series/HighestRatedSeriesGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";
import TrendingSeriesGrid from "@/components/content-grids/series/TrendingSeriesGrid";
import useShowStore from "@/hooks/use-media-store";
import GenresGrid from "@/components/content-grids/GenresGrid";

const SeriesContent = () => {
  const { selectedGenres } = useShowStore();

  return (
    <>
      <SearchBar />
      {selectedGenres.tvIds.length > 0 ? (
        <>
          <GridHeading title="Series" />
          <GenresGrid media_type="tv" />
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
