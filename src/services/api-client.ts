import axios, { AxiosRequestConfig } from "axios";

// Define a generic interface for paginated responses (if applicable)
export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

// // Create an axios instance with the TMDb base URL and API key
// const options = {
//   method: "GET",
//   url: import.meta.env.VITE_TMDB_BASE_URL,
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
//   },
// };

// axios
//   .request(options)
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));
