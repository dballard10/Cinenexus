import CardGrid from "./CardGrid";
import { currentShows } from "./data/current-shows";

const CurrentShowsGrid = () => {
  return (
    <div>
      <CardGrid shows={currentShows} />
    </div>
  );
};

export default CurrentShowsGrid;
