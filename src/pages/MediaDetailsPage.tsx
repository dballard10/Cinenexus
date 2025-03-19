import { Navigation } from "@/components/page-components/Navigation";
import PageHeading from "@/components/page-components/PageHeading";
import MediaDetails from "@/components/media-details/MediaDetails";
import useShowStore from "@/hooks/use-media-store";

const MediaDetailsPage = () => {
  const selectedShow = useShowStore((state) => state.selectedShow);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title={selectedShow?.name} />
      <main className="flex h-full">
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <MediaDetails />
        </div>
      </main>
    </div>
  );
};

export default MediaDetailsPage;
