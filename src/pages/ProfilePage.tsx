import ContentFilters from "../components/filters/ContentFilters";
import { Navigation } from "../components/page-components/Navigation";
import AsidePanel from "../components/page-components/AsidePanel";
import useToggleAside from "../hooks/use-toggleAside";
import PageHeading from "../components/page-components/PageHeading";
import ProfileContent from "../components/page-components/media-content/ProfileContent";

const ProfilePage = () => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title="Your Profile" />
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
            <ProfileContent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
