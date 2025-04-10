export interface Media {
  id: number;
  name: string;
  backdrop_path: string;
  vote_average: number;
  vote_count?: number;
  media_type: string;
  release_date?: string;
}

export interface MediaDetails extends Media {
  overview: string;
  release_date: string;
  runtime: number;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { iso_639_1: string; name: string }[];
}
