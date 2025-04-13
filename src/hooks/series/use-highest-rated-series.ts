import { Media } from "@/entities/media";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useHighestRatedSeries = () => {
  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_BASE_URL}/tv/top_rated?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  };

  return useQuery({
    queryKey: ["highest-rated-series"],
    queryFn: async () => {
      const response = await axios.request(options);

      console.log("Response data results:", response.data.results);

      if (response && response.data.results) {
        return response.data.results.map(
          (item: any): Media => ({
            id: item.id,
            name: item.name || item.title,
            backdrop_path: item.backdrop_path,
            vote_average: item.vote_average,
            media_type: "tv",
          })
        );
      }

      throw new Error("Invalid response from API");
    },
  });
};

export default useHighestRatedSeries;
