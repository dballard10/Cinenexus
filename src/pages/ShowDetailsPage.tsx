import { Navigation } from "@/components/Navigation";
import PageHeading from "@/components/PageHeading";
import ShowDetails from "@/components/ShowDetails";
import { useParams } from "react-router-dom";

const ShowDetailsPage = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title={title} />
      <main className="flex h-full">
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <ShowDetails />
        </div>
      </main>
    </div>
  );
};

export default ShowDetailsPage;
