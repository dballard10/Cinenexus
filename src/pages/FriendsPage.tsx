import { Navigation } from "../components/PageComponents/Navigation";
import FriendsList from "../components/Friends/FriendsList";
import ContentFilters from "../components/Filters/ContentFilters";
import AsidePanel from "../components/Aside/AsidePanel";
import useToggleAside from "../hooks/use-toggleAside";
import PageHeading from "../components/PageComponents/PageHeading";
import GridDisplay from "../components/DisplayGrids/GridDisplay";

const FriendsPage = () => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: false,
  });

  // Define tabs for the aside panel
  const asideTabs = [
    {
      label: "Friends",
      content: <FriendsList />,
    },
    {
      label: "Filters",
      content: <ContentFilters />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title="Friends" />
      <main className="flex h-full">
        <AsidePanel
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
          title="Friends"
          tabs={asideTabs}
        />
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <GridDisplay
              currentShowsText="What your friends are currently watching"
              allShowsText="All of your friends' watches"
              favoriteShowsText="Your friends' favorite shows"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendsPage;
