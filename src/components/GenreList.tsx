import Genre from "./Genre";

const GenreList = () => {
  return (
    <div className="space-y-2">
      <Genre name="Action" />
      <Genre name="Adventure" />
      <Genre name="Animation" />
      <Genre name="Comedy" />
      <Genre name="Drama" />
    </div>
  );
};

export default GenreList;
