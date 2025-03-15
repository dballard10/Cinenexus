import ShowsGrid from "./ShowsGrid";
import CurrentShowsGrid from "./CurrentGrid";
import FavoritesGrid from "./FavoritesGrid";
import SearchBar from "../Filters/SearchBar";

interface GridDisplayProps {
  currentShowsText?: string;
  allShowsText: string;
  favoriteShowsText?: string;
}

const GridDisplay = ({
  currentShowsText,
  allShowsText,
  favoriteShowsText,
}: GridDisplayProps) => {
  return (
    <>
      <SearchBar />
      {/* Current Watches */}
      {currentShowsText && (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-white pb-2">
            {currentShowsText}
          </h1>
          <div className="flex flex-col gap-4">
            <CurrentShowsGrid />
          </div>
        </>
      )}

      {/* Favorites */}
      {favoriteShowsText && (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-white pb-2 pt-2">
            {favoriteShowsText}
          </h1>
          <div className="flex flex-col gap-4">
            <FavoritesGrid />
          </div>
        </>
      )}

      {/* All Watches */}
      <h1 className="text-3xl font-bold tracking-tight text-white pb-2 pt-2">
        {allShowsText}
      </h1>
      <div className="flex flex-col gap-4">
        <ShowsGrid />
      </div>
    </>
  );
};

export default GridDisplay;
