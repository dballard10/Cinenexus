import React from "react";
import useShowStore from "@/hooks/use-media-store";
import { X } from "lucide-react";

const ClearFilterButton = () => {
  const { clearSelectedGenres } = useShowStore();
  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-1 w-full hover:bg-white/20`}
        onClick={() => clearSelectedGenres()}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ClearFilterButton;
