import useShowStore from "@/hooks/use-media-store";
import Rating from "../card-components/Rating";
import FavoritesButton from "../card-components/FavoritesButton";
import ShowImages from "./ShowImages";
import MediaType from "../card-components/MediaType";

const ShowDetails = () => {
  const selectedShow = useShowStore((state) => state.selectedShow);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex gap-2 pb-2 justify-between">
          <MediaType media_type={selectedShow.media_type} />
          <div className="flex gap-2">
            <FavoritesButton showId={selectedShow.id} />
            <Rating rating={selectedShow.vote_average} />
          </div>
        </div>
        <p className="text-lg">{selectedShow.overview}</p>
      </div>
      <div className="bg-gray-900 rounded-lg p-4">
        <ShowImages
          id={selectedShow.id}
          media_type={selectedShow.media_type}
          title={selectedShow.name}
        />
      </div>
    </div>
  );
};

export default ShowDetails;
