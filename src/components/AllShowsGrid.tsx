import { allShows } from "./data/all-shows";
import CardGrid from "./CardGrid";

const AllShowsGrid = () => {
  return (
    <div>
      <CardGrid shows={allShows} />
    </div>
  );
};

export default AllShowsGrid;
