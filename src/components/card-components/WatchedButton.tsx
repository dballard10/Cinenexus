import { useState } from "react";
import { TbEyePlus, TbEyeX, TbEye, TbEyeFilled } from "react-icons/tb";
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
  const [isHovering, setIsHovering] = useState(false);

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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      title={isWatched ? "Remove from watched" : "Add to watched"}
      className={cn(
        "transition-all duration-300 p-3 rounded-full",
        "hover:bg-blue-500/20",
        "group"
      )}
    >
      {isWatched ? (
        <TbEyeFilled className="w-6 h-6 text-blue-500 transition-all duration-300" />
      ) : isHovering ? (
        <TbEyePlus className="w-6 h-6 text-gray-700 group-hover:text-blue-500 transition-all duration-300" />
      ) : (
        <TbEye className="w-6 h-6 text-gray-700 group-hover:text-blue-500 transition-all duration-300" />
      )}
    </motion.button>
  );
};

export default WatchedButton;
