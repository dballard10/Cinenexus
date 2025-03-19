import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  setSelectedShow: (show: ShowState["selectedShow"]) => void;
  clearSelectedShow: () => void;
}

const useShowStore = create<ShowState>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "show-storage",
    }
  )
);

export default useShowStore;
