import { useState, useEffect } from "react";
import { Media } from "../../entities/media";
import FavoritesButton from "../card-components/FavoritesButton";
import Rating from "../card-components/Rating";
import ShowImages from "./ShowImages";
import axios from "axios";

interface ShowDetailsProps {
  id: number;
  mediaType: "movie" | "tv";
  setShowTitle: (title: string) => void;
}

const ShowDetails = ({ id, mediaType, setShowTitle }: ShowDetailsProps) => {
  const [showDetails, setShowDetails] = useState<Media | null>(null);
  const [isLoading, setIsLoading] = useState(!id);
  const [error, setError] = useState<string | null>(null);

  console.log(id);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const endpoint =
          mediaType === "movie"
            ? `https://api.themoviedb.org/3/movie/${id}?language=en-US`
            : `https://api.themoviedb.org/3/tv/${id}?language=en-US`;

        const response = await axios.get(endpoint, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc",
          },
        });

        setShowDetails(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShowDetails();
  }, [id, mediaType]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex gap-2 pb-2">
          <FavoritesButton showId={showDetails?.id} />
          <Rating rating={showDetails?.vote_average} />
        </div>
        <p className="text-2xl font-bold">{showDetails?.overview}</p>
      </div>
      <div className="bg-gray-900 rounded-lg p-4">
        <ShowImages
          image={showDetails?.backdrop_path}
          title={showDetails?.name}
        />
      </div>
    </div>
  );
};

export default ShowDetails;
