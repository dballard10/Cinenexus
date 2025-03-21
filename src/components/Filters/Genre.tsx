import { useState } from "react";

interface GenreProps {
  id: number;
  name: string;
}

const Genre = ({ id, name }: GenreProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleGenreClick = (id: number) => {
    setIsSelected(!isSelected);
    console.log(`Genre clicked: ${id}`);
  };

  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full
          ${isSelected ? "bg-white/30 font-medium" : ""}`}
        onClick={() => handleGenreClick(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Genre;
