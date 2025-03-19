import useShowStore from "@/hooks/use-media-store";
import Rating from "../card-components/Rating";
import FavoritesButton from "../card-components/FavoritesButton";
import MediaImages from "./Images";
import MediaType from "../card-components/MediaType";
import MediaTrailer from "./Trailer";
import Overview from "./Overview";
import ReleaseDate from "./ReleaseDate";

const MediaDetails = () => {
  const selectedShow = useShowStore((state) => state.selectedShow);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex gap-2 pb-2 justify-between">
          <div className="flex gap-4 items-center">
            <MediaType media_type={selectedShow.media_type} />
            <ReleaseDate release_date={selectedShow.release_date} />
          </div>
          <div className="flex gap-2">
            <FavoritesButton showId={selectedShow.id} />
            <Rating rating={selectedShow.vote_average} />
          </div>
        </div>
        <Overview overview={selectedShow.overview} />
      </div>
      <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4">
        <MediaTrailer
          id={selectedShow.id}
          media_type={selectedShow.media_type}
          title={selectedShow.name}
        />
        <MediaImages
          id={selectedShow.id}
          media_type={selectedShow.media_type}
          title={selectedShow.name}
        />
      </div>
    </div>
  );
};

export default MediaDetails;
