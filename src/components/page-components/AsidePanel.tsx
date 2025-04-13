import CollapseButton from "../filters/CollapseButton";
import { useEffect, useRef } from "react";
import ContentFilters from "../filters/ContentFilters";
import useMediaStore from "@/hooks/use-media-store";

interface AsidePanelProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const AsidePanel = ({ isCollapsed, toggleCollapse }: AsidePanelProps) => {
  const asideRef = useRef<HTMLDivElement>(null);
  const isExpandedNav = useMediaStore((state) => state.expandedNav);
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

  return (
    <div className={`relative ${isExpandedNav ? "top-[400px]" : ""}`}>
      <aside
        ref={asideRef}
        className={`absolute -top-8 -left-8 m-0 h-screen bg-gray-900 text-white overflow-y-auto z-40
            w-80 transition-transform ease-in-out duration-300
            ${
              isCollapsed
                ? "-translate-x-full shadow-none border-none"
                : "translate-x-0 shadow-2xl shadow-black/50 border-r border-gray-700"
            }`}
      >
        <div className="mt-2 px-3 pt-20 pb-14">
          <ContentFilters media_type="both" />
        </div>
      </aside>

      <div className="absolute top-2 -left-2 z-50 transition-all duration-300 ease-in-out">
        <CollapseButton
          toggleCollapse={toggleCollapse}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default AsidePanel;
