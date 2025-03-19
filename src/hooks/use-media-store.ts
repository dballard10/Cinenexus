import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShowState {
  selectedShow: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path?: string;
    vote_average: number;
    media_type: "tv" | "movie";
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
          },
        }),
    }),
    {
      name: "show-storage",
    }
  )
);

export default useShowStore;
