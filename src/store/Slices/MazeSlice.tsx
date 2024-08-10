import { GridType, ParNodeType } from "@/types/type";
import { deepCopy } from "@/utils/deepCopy";

import { StateCreator } from "zustand";
import { GridSliceType } from "./GridSlice";
import { INITIAL_GRID } from "@/constants/constant";
import { initializeGrid } from "@/algorithms/maze/initialGrid";

type State = {
  cleanMaze: GridType;
  isMazeClean: boolean;
  isGridMaze: boolean;
  startNode: ParNodeType;
  goalNode: ParNodeType;
};

type Actions = {
  resetMaze: () => void;
  setCleanMaze: (maze: GridType) => void;
  setIsMazeClean: (clean: boolean) => void;
  setStartNode: (startNode: ParNodeType) => void;
  setGoalNode: (goalNode: ParNodeType) => void;
};

export type MazeSliceType = State & Actions;

// run only once when the app starts up:
const { grid, startNode, goalNode } = initializeGrid(
  INITIAL_GRID.rows,
  INITIAL_GRID.nodes
);

const createMazeSlice: StateCreator<
  MazeSliceType & GridSliceType,
  [],
  [],
  MazeSliceType
> = (set, get) => ({
  // variables:
  cleanMaze: grid,
  isMazeClean: true,
  isGridMaze: false,
  startNode: startNode,
  goalNode: goalNode,

  // Methods:
  setCleanMaze: (maze: GridType) => set({ cleanMaze: maze, isGridMaze: true }),

  resetMaze: () => {
    const cleanMaze = get().cleanMaze;
    const { startNode, goalNode } = initializeGrid(get().rows, get().nodes);
    set({
      grid: deepCopy(cleanMaze),
      startNode,
      goalNode,
      isGridMaze: true,
      isMazeClean: true,
    });
  },

  setIsMazeClean: (clean: boolean) => {
    set({ isMazeClean: clean });
  },

  setStartnGoalNodes: (startNode: ParNodeType, goalNode: ParNodeType) => {
    set(() => ({ startNode: startNode, goalNode: goalNode }));
  },

  setStartNode: (startNode: ParNodeType) => {
    set(() => ({ startNode }));
  },

  setGoalNode: (goalNode: ParNodeType) => {
    set(() => ({ goalNode }));
  },
});

export default createMazeSlice;
