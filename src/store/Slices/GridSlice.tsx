import { createGrid } from "@/algorithms/maze/createGrid";
import { initializeGrid } from "@/algorithms/maze/initialGrid";
import { INITIAL_GRID } from "@/constants/constant";
import { GridType } from "@/types/type";
import { deepCopy } from "@/utils/deepCopy";

import { StateCreator } from "zustand";
import { MazeSliceType } from "./MazeSlice";

type State = {
  rows: number;
  nodes: number;
  grid: GridType; // Initial maze and all the maze visualiztion happens in thsi grid.
  gridSize: "sm" | "md" | "lg";
};

type Actions = {
  setGrid: (grid: GridType) => void;
  clearGrid: () => void;
  setGridSize: (size: "sm" | "md" | "lg") => void;
};

export type GridSliceType = State & Actions;

// run only once when the app starts up:
const { grid, startNode, goalNode } = initializeGrid(
  INITIAL_GRID.rows,
  INITIAL_GRID.nodes
);

const createGridSlice: StateCreator<
  GridSliceType & MazeSliceType,
  [],
  [],
  GridSliceType
> = (set, get) => ({
  // variables:
  isGridMaze: false,
  rows: 19,
  nodes: 19,
  grid: grid,
  cleanMaze: grid,
  gridSize: "sm",
  startNode: startNode,
  goalNode: goalNode,
  inProgress: false,

  // Methods:
  setGrid: (grid: GridType) => set({ grid: grid }),

  clearGrid: () => {
    const { grid, startNode, goalNode } = initializeGrid(
      get().rows,
      get().nodes
    );
    set({
      grid,
      cleanMaze: deepCopy(grid),
      startNode,
      goalNode,
      isGridMaze: false,
    });
  },

  setGridSize: (size: "sm" | "md" | "lg") => {
    if (size == "sm") {
      set({ rows: 19, nodes: 19, gridSize: "sm" });
    } else if (size == "md") {
      set({ rows: 29, nodes: 29, gridSize: "md" });
    } else {
      set({ rows: 39, nodes: 39, gridSize: "lg" });
    }
    set((state) => ({ grid: createGrid(state.rows, state.nodes) }));
    const { grid, startNode, goalNode } = initializeGrid(
      get()?.rows,
      get()?.nodes
    );
    set({ grid, startNode, goalNode });
  },
});

export default createGridSlice;
