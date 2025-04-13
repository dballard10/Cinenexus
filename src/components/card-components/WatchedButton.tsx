import { useState } from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WatchedButtonProps {
  showId: number;
  initialState?: boolean;
  onToggle?: (showId: number, isWatched: boolean) => void;
}

const WatchedButton = ({
  showId,
  initialState = false,
  onToggle,
}: WatchedButtonProps) => {
  const [isWatched, setIsWatched] = useState(initialState);

  const handleClick = () => {
    const newState = !isWatched;
    setIsWatched(newState);
    onToggle?.(showId, newState);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      title="Mark as watched"
      className={cn(
        "transition-all duration-300 p-3 rounded-full",
        "hover:bg-blue-500/20",
        "group"
      )}
    >
      <Eye
        className={cn(
          "w-6 h-6 transition-all duration-300",
          isWatched
            ? "fill-blue-500 text-blue-500"
            : "text-gray-400 group-hover:text-blue-500"
        )}
      />
    </motion.button>
  );
};

export default WatchedButton;
