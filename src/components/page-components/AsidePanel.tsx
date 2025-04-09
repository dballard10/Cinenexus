import CollapseButton from "../filters/CollapseButton";

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
  return (
    <aside
      className={`bg-gray-900 text-white p-3 duration-100 overflow-y-auto
            ${isCollapsed ? "w-16" : "w-72"}`}
    >
      <CollapseButton
        title={"Filters"}
        toggleCollapse={toggleCollapse}
        isCollapsed={isCollapsed}
      />

      {!isCollapsed && <>{children}</>}
    </aside>
  );
};

export default AsidePanel;
