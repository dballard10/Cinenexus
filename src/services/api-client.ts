import axios, { AxiosRequestConfig } from "axios";

// Define a generic interface for paginated responses (if applicable)
export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

// Create an axios instance with the TMDb base URL and API key
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // Method to fetch a list of items
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  // Method to fetch a single item by id
  get = (id: string | number, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((res) => res.data);
  };
}

export default APIClient;
