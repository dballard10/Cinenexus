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
  const platform_query = `with_watch_providers=${platform_list}`;

  const query =
    (sort_by ? "&" + sort_by_query : "") +
    (genre_list ? "&" + genre_query : "") +
    (platform_list ? "&" + platform_query : "");

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/${media_type}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1${query}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc`,
    },
  };

  return useQuery({
    queryKey: ["filtered-media", genre_list, platform_list, sort_by],
    queryFn: async () => {
      const response = await axios.request(options);

      console.log("Genres list:", genre_list);
      console.log("Platforms list:", platform_list);
      console.log("Sort by:", sort_by);

      if (response && response.data.results) {
        return response.data.results.map(
          (item: any): Media => ({
            id: item.id,
            name: item.title || item.name,
            backdrop_path: item.backdrop_path,
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
