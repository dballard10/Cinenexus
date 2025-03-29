import Genre from "./Genre";
import useMovieGenres from "@/hooks/movies/use-movie-genres";
import useTvGenres from "@/hooks/series/use-tv-genres";
import LoadingIcon from "./LoadingIcon";

const GenreList = ({ media_type }: { media_type: string }) => {
  const {
    data: movieGenres,
    isLoading: movieLoading,
    error: movieError,
  } = useMovieGenres();
  const {
    data: tvGenres,
    isLoading: tvLoading,
    error: tvError,
  } = useTvGenres();

  if (movieLoading || tvLoading) return <LoadingIcon />;
  if (movieError || tvError) return <div>Error: {movieError?.message}</div>;

  // Filter genres based on media_type
  const selectedGenres = media_type === "movie" ? movieGenres : tvGenres;

  return (
    <div className="flex flex-col gap-2">
      {selectedGenres?.map((genre) => {
        return (
          <Genre
            key={genre.name}
            movieId={genre.id}
            tvId={genre.id}
            name={genre.name}
          />
        );
      })}
    </div>
  );
};

export default GenreList;
