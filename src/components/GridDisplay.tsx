import AllShowsGrid from "./AllShowsGrid";
import CurrentShowsGrid from "./CurrentShowsGrid";
import FavoritesGrid from "./FavoritesGrid";
import SearchBar from "./SearchBar";

interface GridDisplayProps {
  currentShowsText: string;
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
      <h1 className="text-3xl font-bold tracking-tight text-white pb-2">
        {currentShowsText}
      </h1>
      <div className="flex flex-col gap-4">
        <CurrentShowsGrid />
      </div>

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
        <AllShowsGrid />
      </div>
    </>
  );
};

export default GridDisplay;
