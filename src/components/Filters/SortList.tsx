import React from "react";
import SortBy from "./SortBy";

const SortList = () => {
  const options = ["Alphabetical", "Recent", "Rating"];

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <SortBy key={option} name={option} />
      ))}
    </div>
  );
};

export default SortList;
