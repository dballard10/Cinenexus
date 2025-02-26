import AllShowsGrid from "./AllShowsGrid";
import CurrentShowsGrid from "./CurrentShowsGrid";
import Platforms from "./Platforms";
import Sort from "./Sort";

interface GridDisplayProps {
  currentWatchesText: string;
  allWatchesText: string;
}

const GridDisplay = ({
  currentWatchesText,
  allWatchesText,
}: GridDisplayProps) => {
  return (
    <>
      {/* Current Watches */}
      <h1 className="text-3xl font-bold tracking-tight text-white pb-2">
        {currentWatchesText}
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Platforms />
          <Sort />
        </div>
        <CurrentShowsGrid />
      </div>

      {/* All Watches */}
      <h1 className="text-3xl font-bold tracking-tight text-white pb-2 pt-2">
        {allWatchesText}
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Platforms />
          <Sort />
        </div>
        <AllShowsGrid />
      </div>
    </>
  );
};

export default GridDisplay;
