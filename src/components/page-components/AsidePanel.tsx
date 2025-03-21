import CollapseButton from "../filters/CollapseButton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface AsidePanelProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  children?: React.ReactNode;
  title: string;
  tabs?: TabItem[];
}

const AsidePanel = ({
  isCollapsed,
  toggleCollapse,
  children,
  title,
  tabs,
}: AsidePanelProps) => {
  return (
    <aside
      className={`bg-gray-900 text-white p-3 duration-100 
            ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <CollapseButton
        title={title}
        toggleCollapse={toggleCollapse}
        isCollapsed={isCollapsed}
      />

      {!isCollapsed && (
        <>
          {tabs ? (
            <Tabs defaultValue={tabs[0]?.label} className="w-full">
              <TabsList className="bg-gray-800 w-full mb-4">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.label}
                    value={tab.label}
                    className="text-white data-[state=active]:bg-gray-700"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsContent key={tab.label} value={tab.label}>
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            children
          )}
        </>
      )}
    </aside>
  );
};

export default AsidePanel;
