import { Media } from "@/entities/media";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMediaByGenres = (
  tv_ids: string,
  movie_ids: string,
  media_type: string
) => {
  const fetchData = async (options: any) => {
    const response = await axios.request(options);

    if (response && response.data.results) {
      return response.data.results.map(
        (item: any): Media => ({
          id: item.id,
          name: item.name || item.title,
          backdrop_path: item.backdrop_path,
          vote_average: item.vote_average,
          media_type: options.url.includes("/movie") ? "movie" : "tv",
        })
      );
    }
    return [];
  };

  const tv_options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${tv_ids}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc`,
    },
  };

  const movie_options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${movie_ids}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc`,
    },
  };

  return useQuery({
    queryKey: ["movies-by-genres", media_type, tv_ids, movie_ids],
    queryFn: async () => {
      if (media_type === "both") {
        const movieResults = await fetchData(movie_options);
        const tvResults = await fetchData(tv_options);
        console.log("Combined results:", [...movieResults, ...tvResults]);
        return [...movieResults, ...tvResults];
      } else if (media_type === "tv") {
        const results = await fetchData(tv_options);
        console.log("TV results:", results);
        return results;
      } else {
        const results = await fetchData(movie_options);
        console.log("Movie results:", results);
        return results;
      }
    },
  });
};

export default useMediaByGenres;
