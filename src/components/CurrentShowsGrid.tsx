import CardGrid from "./CardGrid";
import { currentWatches } from "./data/current-shows";

const CurrentShowsGrid = () => {
  return (
    <div>
      <CardGrid shows={currentWatches} />
    </div>
  );
};

export default CurrentShowsGrid;
