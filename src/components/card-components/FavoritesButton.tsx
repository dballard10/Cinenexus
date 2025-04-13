import { useState } from "react";
import { TbStar, TbStarFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FavoritesButtonProps {
  showId: number;
  initialState?: boolean;
  onToggle?: (showId: number, isFavorite: boolean) => void;
}

const FavoritesButton = ({
  showId,
  initialState = false,
  onToggle,
}: FavoritesButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialState);

  const handleClick = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    onToggle?.(showId, newState);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      title="Add to favorites"
      className={cn(
        "transition-all duration-300 p-3 rounded-full",
        "hover:bg-purple-500/20",
        "group"
      )}
    >
      {isFavorite ? (
        <TbStarFilled className="w-6 h-6 text-purple-400 transition-all duration-300" />
      ) : (
        <TbStar className="w-6 h-6 text-gray-700 group-hover:text-purple-400 transition-all duration-300" />
      )}
    </motion.button>
  );
};

export default FavoritesButton;
