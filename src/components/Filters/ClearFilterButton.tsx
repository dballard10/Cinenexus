import React from "react";
import useShowStore from "@/hooks/use-media-store";
import { X } from "lucide-react";

const ClearFilterButton = ({ filter }: { filter: string }) => {
  const { clearSelectedGenres, clearSelectedPlatforms, clearSelectedSort } =
    useShowStore();

  const handleClick = () => {
    if (filter === "genres") {
      clearSelectedGenres();
    } else if (filter === "platforms") {
      clearSelectedPlatforms();
    } else if (filter === "sort") {
      clearSelectedSort();
    }
  };

  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-1 w-full hover:bg-white/20`}
        onClick={handleClick}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ClearFilterButton;
