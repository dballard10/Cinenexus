import SortBy from "./SortBy";
import { sortBy } from "@/data/sortby";

const SortList = () => {
  return (
    <div className="flex flex-col gap-2">
      {sortBy.map((option) => (
        <SortBy id={option.id} name={option.name} />
      ))}
    </div>
  );
};

export default SortList;
