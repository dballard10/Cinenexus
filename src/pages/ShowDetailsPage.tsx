import { Navigation } from "@/components/PageComponents/Navigation";
import PageHeading from "@/components/PageComponents/PageHeading";
import ShowDetails from "../components/ShowDetails/ShowDetails";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const ShowDetailsPage = () => {
  const location = useLocation();
  const params = useParams();
  const [showTitle, setShowTitle] = useState("");

  // Get the id with better error handling
  const idFromState = location.state?.id
    ? Number(location.state.id)
    : params.id
    ? parseInt(params.id) || 0
    : 0;

  // Default to "tv" if mediaType is not available
  const mediaTypeFromState = location.state?.mediaType || "tv";

  console.log("ID value:", idFromState, "Type:", typeof idFromState);
  console.log("Media type:", mediaTypeFromState);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title={showTitle} />
      <main className="flex h-full">
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <ShowDetails
            id={idFromState}
            mediaType={mediaTypeFromState}
            setShowTitle={setShowTitle}
          />
        </div>
      </main>
    </div>
  );
};

export default ShowDetailsPage;
