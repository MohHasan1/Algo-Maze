import { MAZE_ALGO, SEARCH_ALGO } from "@/constants/constant";
import { StateCreator } from "zustand";

type State = {
  searchAlgo: string;
  mazeAlgo: string;
  isMazeAlgProgress: boolean;
  isSearchAlgProgress: boolean;
};
type Action = {
  setSearchAlgo: (algo: string) => void;
  setMazeAlgo: (algo: string) => void;
  toggleMazeAlgProgress: () => void;
  toggleSearcgAlgProgress: () => void;
};

export type AlgoSliceType = State & Action;

const createAlgoSlice: StateCreator<AlgoSliceType> = (set) => ({
  // Variables
  searchAlgo: SEARCH_ALGO.NONE,
  mazeAlgo: MAZE_ALGO.BTM,
  isMazeAlgProgress: false,
  isSearchAlgProgress: false,

  // Methods
  setSearchAlgo: (algo: string) => {
    set({ searchAlgo: algo });
  },

  setMazeAlgo: (algo: string) => {
    set({ mazeAlgo: algo });
  },

  toggleMazeAlgProgress: () => {
    set((state) => ({ isMazeAlgProgress: !state.isMazeAlgProgress }));
  },

  toggleSearcgAlgProgress: () => {
    set((state) => ({ isSearchAlgProgress: !state.isSearchAlgProgress }));
  },
});

export default createAlgoSlice;
