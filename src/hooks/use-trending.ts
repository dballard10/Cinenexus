import { Media } from "@/entities/media";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTrending = () => {
  const options = {
    method: "GET",
    url: `${
      import.meta.env.VITE_TMDB_BASE_URL
    }/trending/all/day?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  };

  return useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const response = await axios.request(options);

      if (response && response.data.results) {
        return response.data.results.map(
          (item: any): Media => ({
            id: item.id,
            name: item.name || item.title,
            backdrop_path: item.backdrop_path,
            vote_average: item.vote_average,
            media_type: item.media_type,
          })
        );
      }

      throw new Error("Invalid response from API");
    },
  });
};

export default useTrending;
