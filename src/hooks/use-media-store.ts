import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface ShowState {
  selectedShow: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    media_type: "tv" | "movie";
    release_date: string;
    runtime: number;
    genres: { id: number; name: string }[];
    production_companies: { id: number; name: string }[];
    production_countries: { iso_3166_1: string; name: string }[];
    spoken_languages: { iso_639_1: string; name: string }[];
  };
  selectedGenres: {
    movieIds: number[];
    tvIds: number[];
    names: string[];
  };
  setSelectedShow: (show: ShowState["selectedShow"]) => void;
  clearSelectedShow: () => void;
  addSelectedGenre: (movieId: number, tvId: number, name: string) => void;
  removeSelectedGenre: (movieId: number, tvId: number, name: string) => void;
  clearSelectedGenres: () => void;
}

const useShowStore = create<ShowState>()((set) => ({
  selectedShow: {
    id: 0,
    name: "",
    overview: "",
    poster_path: "",
    backdrop_path: "",
    vote_average: 0,
    media_type: "tv",
    release_date: "",
    runtime: 0,
    genres: [],
    production_companies: [],
    production_countries: [],
    spoken_languages: [],
  },
  selectedGenres: {
    movieIds: [],
    tvIds: [],
    names: [],
  },
  setSelectedShow: (show) => set({ selectedShow: show }),
  clearSelectedShow: () =>
    set({
      selectedShow: {
        id: 0,
        name: "",
        overview: "",
        poster_path: "",
        backdrop_path: "",
        vote_average: 0,
        media_type: "tv",
        release_date: "",
        runtime: 0,
        genres: [],
        production_companies: [],
        production_countries: [],
        spoken_languages: [],
      },
    }),
  addSelectedGenre: (movieId, tvId, name) =>
    set((state) => ({
      selectedGenres: {
        ...state.selectedGenres,
        movieIds: movieId
          ? [...state.selectedGenres.movieIds, movieId]
          : state.selectedGenres.movieIds,
        tvIds: tvId
          ? [...state.selectedGenres.tvIds, tvId]
          : state.selectedGenres.tvIds,
        names: [...state.selectedGenres.names, name],
      },
    })),
  removeSelectedGenre: (movieId, tvId, name) =>
    set((state) => ({
      selectedGenres: {
        ...state.selectedGenres,
        movieIds: state.selectedGenres.movieIds.filter((id) => id !== movieId),
        tvIds: state.selectedGenres.tvIds.filter((id) => id !== tvId),
        names: state.selectedGenres.names.filter(
          (genreName) => genreName !== name
        ),
      },
    })),
  clearSelectedGenres: () =>
    set({
      selectedGenres: { movieIds: [], tvIds: [], names: [] },
    }),
}));

export default useShowStore;
