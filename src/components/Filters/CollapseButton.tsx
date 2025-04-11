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
  return (
    <header className="flex items-center gap-3 mb-4">
      <button
        onClick={toggleCollapse}
        className="w-10 h-10 text-white bg-gray-700 rounded-full flex items-center justify-center"
      >
        {isCollapsed ? (
          <TbLayoutSidebarLeftExpandFilled className="w-6 h-6" />
        ) : (
          <TbLayoutSidebarLeftCollapseFilled className="w-6 h-6" />
        )}
      </button>
      {!isCollapsed && <h2 className="text-xl font-semibold">Filters</h2>}
    </header>
  );
};

export default CollapseButton;
