import CollapseButton from "./CollapseButton";

interface AsidePanelProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  children: React.ReactNode;
  title: string;
}

const AsidePanel = ({
  isCollapsed,
  toggleCollapse,
  children,
  title,
}: AsidePanelProps) => {
  return (
    <aside
      className={`bg-gray-900 text-white p-3 transition-all duration-300 
            ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <CollapseButton
        title={title}
        toggleCollapse={toggleCollapse}
        isCollapsed={isCollapsed}
      />
      {!isCollapsed && children}
    </aside>
  );
};

export default AsidePanel;
