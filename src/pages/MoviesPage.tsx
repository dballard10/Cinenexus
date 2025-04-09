import ContentFilters from "@/components/filters/ContentFilters";
import { Navigation } from "@/components/page-components/Navigation";
import AsidePanel from "@/components/page-components/AsidePanel";
import useToggleAside from "@/hooks/screen/use-toggleAside";
import MovieContent from "@/components/page-components/media-content/MovieContent";

const MoviePage = () => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: false,
  });

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <Navigation />
      <main className="flex flex-1 overflow-hidden">
        <AsidePanel isCollapsed={isCollapsed} toggleCollapse={toggleCollapse}>
          <ContentFilters media_type="movie" />
        </AsidePanel>
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <MovieContent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
