import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface VideoResult {
  id: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
}

interface VideosResponse {
  id: number;
  results: VideoResult[];
}

const useVideos = (id: number | undefined, media_type: string | undefined) => {
  const options = {
    method: "GET",
    url:
      id && media_type
        ? `https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en`
        : "",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc`,
    },
  };

  return useQuery<{ data: VideosResponse }>({
    queryKey: ["videos", id, media_type],
    queryFn: async () => {
      console.log(`API Request URL: ${options.url}`);
      const response = await axios.request(options);
      return response;
    },
    enabled: !!id && !!media_type, // Only run query when id and media_type are available
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 1, // Only retry once on failure
  });
};

export default useVideos;
