import Genre from "./Genre";
import { genres } from "@/data/genres";

const GenreList = ({ media_type }: { media_type: string }) => {
  // Filter genres based on media_type
  const filteredGenres = genres.filter((genre) => {
    if (media_type === "both") {
      return true; // Return all genres
    } else if (media_type === "movie") {
      return genre.movieId !== undefined; // Return only genres with movieId
    } else if (media_type === "tv") {
      return genre.tvId !== undefined; // Return only genres with tvId
    }
    return false;
  });

  console.log(filteredGenres);

  return (
    <div className="flex flex-col gap-2">
      {filteredGenres.map((genre) => {
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
