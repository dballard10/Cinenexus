import { useState } from "react";

interface PlatformProps {
  id: number;
  name: string;
}

const Platform = ({ id, name }: PlatformProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (id: number) => {
    setIsSelected(!isSelected);
    console.log(`Platform clicked: ${id}`);
  };

  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full
          ${isSelected ? "bg-white/30 font-medium" : ""}`}
        onClick={() => handleClick(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Platform;
