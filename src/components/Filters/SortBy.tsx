import { useState } from "react";
import useMediaStore from "@/hooks/use-media-store";

interface SortByProps {
  id_asc: string;
  id_desc: string;
  name: string;
}

const SortBy = ({ id_asc, id_desc, name }: SortByProps) => {
  const { addSelectedSort, removeSelectedSort } = useMediaStore();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);

    if (isSelected) {
      removeSelectedSort(id_asc, id_desc, name);
    } else {
      addSelectedSort(id_asc, id_desc, name);
    }
  };

  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full
          ${isSelected ? "bg-white/30 font-medium" : ""}`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default SortBy;
