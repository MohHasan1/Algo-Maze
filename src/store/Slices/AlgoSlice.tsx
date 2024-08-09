import { MAZE_ALGO, SEARCH_ALGO } from "@/constants";
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
  searchAlgo: SEARCH_ALGO.BFS,
  mazeAlgo: MAZE_ALGO.BTM,

  setSearchAlgo: (algo: string) => {
    set({ searchAlgo: algo });
  },
  setMazeAlgo: (algo: string) => {
    set({ mazeAlgo: algo });
  },
});

export default createAlgoSlice;
