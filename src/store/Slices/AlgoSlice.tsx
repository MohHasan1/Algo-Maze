import { MAZE_ALGO, SEARCH_ALGO } from "@/constants/constant";
import { StateCreator } from "zustand";

type State = {
  searchAlgo: string;
  mazeAlgo: string;
  
};
type Action = {
  setSearchAlgo: (algo: string) => void;
  setMazeAlgo: (algo: string) => void;
};

export type AlgoSliceType = State & Action;

const createAlgoSlice: StateCreator<State & Action> = (set) => ({
  // Variables
  searchAlgo: SEARCH_ALGO.NONE,
  mazeAlgo: MAZE_ALGO.BTM,

  // Methods
  setSearchAlgo: (algo: string) => {
    set({ searchAlgo: algo });
  },

  setMazeAlgo: (algo: string) => {
    set({ mazeAlgo: algo });
  },
});

export default createAlgoSlice;
