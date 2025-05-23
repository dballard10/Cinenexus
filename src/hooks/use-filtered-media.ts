import { Media } from "@/entities/media";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFilteredMedia = (
  genre_list: string,
  platform_list: string,
  sort_by: string,
  media_type: string
) => {
  const sort_by_query = `sort_by=${sort_by}`;
  const genre_query = `with_genres=${genre_list}`;
  const platform_query = `with_watch_providers=${platform_list}&watch_region=US`;

  const query =
    (sort_by ? "&" + sort_by_query : "") +
    (genre_list ? "&" + genre_query : "") +
    (platform_list ? "&" + platform_query : "");

  const options = {
    method: "GET",
    url: `${
      import.meta.env.VITE_TMDB_BASE_URL
    }/discover/${media_type}?include_adult=false&include_video=false&language=en-US&page=1${query}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  };

  return useQuery({
    queryKey: ["filtered-media", genre_list, platform_list, sort_by],
    queryFn: async () => {
      const response = await axios.request(options);

      if (response && response.data.results) {
        return response.data.results.map(
          (item: any): Media => ({
            id: item.id,
            name: item.title || item.name,
            backdrop_path: item.backdrop_path,
            vote_count: item.vote_count,
            vote_average: item.vote_average,
            media_type: media_type,
          })
        );
      }

      throw new Error("Invalid response from API");
    },
  });
};

export default useFilteredMedia;
