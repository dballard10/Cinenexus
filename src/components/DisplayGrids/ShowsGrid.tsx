import { useState, useEffect } from "react";
import CardGrid from "../CardComponents/CardGrid";
import { Show } from "../../entities/shows";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IzMWI3ZmQxYzI3MTA5ZWYyYzg2NjU0MGRhODg4YiIsIm5iZiI6MTc0MDg1MDIwNS42MjcsInN1YiI6IjY3YzM0NDFkNTczYmViMTUyZjY2YzZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9cpDbqCn9af4f9xt1xpmTe95cFYb_XbSuCHIJ6I_Lc",
  },
};

const ShowsGrid = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        console.log("API Response:", response);
        if (response && response.data.results) {
          const shows: Show[] = response.data.results.map((show: any) => ({
            id: show.id,
            name: show.name,
            overview: show.overview,
            poster_path: show.poster_path,
            backdrop_path: show.backdrop_path,
            vote_average: show.vote_average,
          }));
          setShows(shows);
        } else {
          setError("Invalid response");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <CardGrid shows={shows} />
    </div>
  );
};

export default ShowsGrid;
