import React from "react";

interface GenreProps {
  name: string;
}

const Genre = ({ name }: GenreProps) => {
  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full`}
      >
        {name}
      </button>
    </div>
  );
};

export default Genre;
