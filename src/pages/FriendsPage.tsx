import { Navigation } from "@/components/page-components/Navigation";
import FriendsList from "@/components/friends/FriendsList";
import ContentFilters from "@/components/filters/ContentFilters";
import AsidePanel from "@/components/page-components/AsidePanel";
import useToggleAside from "@/hooks/screen/use-toggleAside";
import FriendsContent from "@/components/page-components/media-content/FriendsContent";

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
      content: <ContentFilters media_type="both" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <main className="flex h-full">
        <AsidePanel
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
          title="Friends"
          tabs={asideTabs}
        />
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <FriendsContent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendsPage;
