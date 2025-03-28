import { Genre } from "@/entities/genre";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMovieGenres = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc`,
    },
  };

  return useQuery({
    queryKey: ["movie-genres"],
    queryFn: async () => {
      const response = await axios.request(options);

      console.log("Response data results:", response.data.genres);

      if (response && response.data.genres) {
        return response.data.genres.map(
          (item: any): Genre => ({
            id: item.id,
            name: item.name,
          })
        );
      }

      throw new Error("Invalid response from API");
    },
  });
};

export default useMovieGenres;
