import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

interface CollapseButtonProps {
  toggleCollapse: () => void;
  isCollapsed: boolean;
}

const CollapseButton = ({
  toggleCollapse,
  isCollapsed,
}: CollapseButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    toggleCollapse();
  };

  return (
    <header
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      className="flex items-center gap-3 mb-4"
    >
      <button
        onClick={handleClick}
        title={isCollapsed ? "Expand filters" : "Collapse filters"}
        className="w-10 h-10 text-white bg-gray-700 rounded-full flex items-center justify-center"
      >
        {isCollapsed ? (
          <TbLayoutSidebarLeftExpandFilled className="w-6 h-6 pointer-events-none" />
        ) : (
          <TbLayoutSidebarLeftCollapseFilled className="w-6 h-6 pointer-events-none" />
        )}
      </button>
      <div className="overflow-hidden">
        <h2
          onClick={(e) => e.stopPropagation()}
          className={`text-xl font-semibold transition-all duration-300 ${
            isCollapsed
              ? "opacity-0 transform translate-x-4 max-w-0"
              : "opacity-100 transform translate-x-0 max-w-xs"
          }`}
        >
          Filters
        </h2>
      </div>
    </header>
  );
};

export default CollapseButton;
