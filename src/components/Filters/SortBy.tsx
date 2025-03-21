import { useState } from "react";

interface SortByProps {
  id: number;
  name: string;
}

const SortBy = ({ id, name }: SortByProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    console.log(`SortBy clicked: ${id}`);
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
