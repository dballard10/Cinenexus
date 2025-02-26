import CardGrid from "./CardGrid";
import Platforms from "./Platforms";

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
      <h1 className="text-3xl font-bold tracking-tight text-white pb-4">
        {currentWatchesText}
      </h1>
      <div className="flex flex-col gap-4">
        <Platforms />
        <CardGrid />
      </div>

      {/* All Watches */}
      <h1 className="text-3xl font-bold tracking-tight text-white pb-4">
        {allWatchesText}
      </h1>
      <div className="flex flex-col gap-4">
        <Platforms />
        <CardGrid />
      </div>
    </>
  );
};

export default GridDisplay;
