import { Navigation } from "@/components/page-components/Navigation";
import AsidePanel from "@/components/page-components/AsidePanel";
import useToggleAside from "@/hooks/screen/use-toggleAside";
import DiscoverContent from "@/components/page-components/media-content/DiscoverContent";
import MovieContent from "@/components/page-components/media-content/MovieContent";
import SeriesContent from "@/components/page-components/media-content/SeriesContent";
import FriendsContent from "@/components/page-components/media-content/FriendsContent";
import ProfileContent from "@/components/page-components/media-content/ProfileContent";

interface ContentPageProps {
  pageName: string;
}

const ContentPage = ({ pageName }: ContentPageProps) => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: true,
  });

  return (
    <div className="h-dvh flex flex-col bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <Navigation />
      <div className="absolute top-20 pt-2 left-8">
        <AsidePanel isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>
      <main className="relative flex-1 overflow-y-auto">
        <div className="px-6 py-6">
          <div className="flex flex-col gap-4">
            {pageName === "discover" && <DiscoverContent />}
            {pageName === "movies" && <MovieContent />}
            {pageName === "series" && <SeriesContent />}
            {pageName === "friends" && <FriendsContent />}
            {pageName === "profile" && <ProfileContent />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContentPage;
