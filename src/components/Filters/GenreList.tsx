import Genre from "./Genre";
import { genres } from "@/data/genres";

const GenreList = () => {
  return (
    <div className="flex flex-col gap-2">
      {genres.map((genre) => (
        <Genre id={genre.id} name={genre.name} />
      ))}
    </div>
  );
};

export default GenreList;
