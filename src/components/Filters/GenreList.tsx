import Genre from "./Genre";
import { movie_genres, tv_genres, unified_genres } from "@/data/genres";

const GenreList = ({ media_type }: { media_type: string }) => {
  // Filter genres based on media_type
  let selectedGenres;
  if (media_type === "movie") {
    selectedGenres = movie_genres;
  } else if (media_type === "tv") {
    selectedGenres = tv_genres;
  } else {
    selectedGenres = unified_genres;
  }

  return (
    <div className="flex flex-col gap-2">
      {selectedGenres?.map((genre) => {
        return (
          <Genre
            key={genre.name}
            movieId={genre.movieId}
            tvId={genre.tvId}
            name={genre.name}
          />
        );
      })}
    </div>
  );
};

export default GenreList;
