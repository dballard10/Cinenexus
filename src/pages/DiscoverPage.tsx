import { Navigation } from "@/components/page-components/Navigation";
import AsidePanel from "@/components/page-components/AsidePanel";
import useToggleAside from "@/hooks/screen/use-toggleAside";
import DiscoverContent from "@/components/page-components/media-content/DiscoverContent";

const DiscoverPage = () => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: true,
  });

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <Navigation />
      <main className="relative flex-1 overflow-y-auto">
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <AsidePanel
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
          />
          <div className="flex flex-col gap-4">
            <DiscoverContent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiscoverPage;
