import { useState } from "react";

interface GenreProps {
  movieId: number;
  tvId: number;
  name: string;
}

const Genre = ({ movieId, tvId, name }: GenreProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleGenreClick = (movieId: number, tvId: number) => {
    setIsSelected(!isSelected);
    console.log(`Genre clicked: ${movieId}`);
    console.log(`Genre clicked: ${tvId}`);
  };

  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full
          ${isSelected ? "bg-white/30 font-medium" : ""}`}
        onClick={() => handleGenreClick(movieId, tvId)}
      >
        {name}
      </button>
    </div>
  );
};

export default Genre;
