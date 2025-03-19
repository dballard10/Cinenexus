import CurrentShowsGrid from "../content-grids/CurrentGrid";
import FavoritesGrid from "../content-grids/FavoritesGrid";
import SearchBar from "../filters/SearchBar";

interface GridDisplayProps {
  currentShowsText?: string;
  favoriteShowsText?: string;
}

const GridDisplay = ({
  currentShowsText,
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
    </>
  );
};

export default GridDisplay;
