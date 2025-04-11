import CollapseButton from "../filters/CollapseButton";
import { useEffect, useState, useRef } from "react";

interface AsidePanelProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  children?: React.ReactNode;
}

const AsidePanel = ({
  isCollapsed,
  toggleCollapse,
  children,
}: AsidePanelProps) => {
  const [position, setPosition] = useState("relative");
  const asideRef = useRef<HTMLDivElement>(null);

  // When expanding, change to fixed position
  useEffect(() => {
    if (!isCollapsed) {
      setPosition("fixed");
    } else {
      // Short delay to allow animation to complete before switching back to relative
      const timer = setTimeout(() => setPosition("relative"), 300);
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  // Handle click outside to collapse panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isCollapsed &&
        asideRef.current &&
        !asideRef.current.contains(event.target as Node)
      ) {
        toggleCollapse();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCollapsed, toggleCollapse]);

  // Handle click on panel to expand
  const handlePanelClick = () => {
    if (isCollapsed) {
      toggleCollapse();
    }
  };

  return (
    <div className="relative min-w-[4rem] h-full">
      <aside
        ref={asideRef}
        className={`${position} top-15 left-0 h-full bg-gray-900 text-white p-3 duration-100 overflow-y-auto z-50
              ${
                isCollapsed
                  ? "w-16 cursor-pointer"
                  : "w-80 shadow-2xl shadow-black/50 border-r border-gray-700"
              }
              transition-all ease-in-out`}
        onClick={isCollapsed ? handlePanelClick : undefined}
      >
        <CollapseButton
          toggleCollapse={toggleCollapse}
          isCollapsed={isCollapsed}
        />

        {!isCollapsed && <>{children}</>}
      </aside>
    </div>
  );
};

export default AsidePanel;
