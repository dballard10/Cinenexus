import Genre from "./Genre";
import { movie_genres, tv_genres } from "@/data/genres";

const GenreList = ({ media_type }: { media_type: string }) => {
  const genres = media_type === "movie" ? movie_genres : tv_genres;

  return (
    <div className="flex flex-col gap-2">
      {genres.map((genre) => (
        <Genre id={genre.id} name={genre.name} />
      ))}
    </div>
  );
};

export default GenreList;
