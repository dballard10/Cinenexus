import { useState } from "react";
import { Star } from "lucide-react";
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
      className={cn(
        "transition-all duration-300 p-2 rounded-full",
        "hover:bg-yellow-500/20",
        "group"
      )}
    >
      <Star
        className={cn(
          "w-6 h-6 transition-all duration-300",
          isFavorite
            ? "fill-yellow-500 text-yellow-500"
            : "text-gray-400 group-hover:text-yellow-500"
        )}
      />
    </motion.button>
  );
};

export default FavoritesButton;
