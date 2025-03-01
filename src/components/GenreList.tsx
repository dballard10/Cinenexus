import Genre from "./Genre";

const GenreList = () => {
  const genres = ["Action", "Adventure", "Animation", "Comedy", "Drama"];

  return (
    <div className="flex flex-col gap-2">
      {genres.map((genre) => (
        <Genre key={genre} name={genre} />
      ))}
    </div>
  );
};

export default GenreList;
