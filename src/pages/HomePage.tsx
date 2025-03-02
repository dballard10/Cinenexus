import ContentFilters from "../components/Filters/ContentFilters";
import { Navigation } from "../components/PageComponents/Navigation";
import AsidePanel from "../components/Aside/AsidePanel";
import useToggleAside from "../hooks/use-toggleAside";
import PageHeading from "../components/PageComponents/PageHeading";
import GridDisplay from "../components/DisplayGrids/GridDisplay";

const HomePage = () => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title="Discover" />
      <main className="flex h-full">
        <AsidePanel
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
          title="Filters"
        >
          <ContentFilters />
        </AsidePanel>
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <GridDisplay
              currentShowsText="What the world is currently watching"
              allShowsText="All Shows"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
