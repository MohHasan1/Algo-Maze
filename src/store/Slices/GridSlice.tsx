import { initializeGrid } from "@/algorithms/maze/initialGrid";
import { GRID_SIZE, INITIAL_GRID } from "@/constants/constant";
import { GridType } from "@/types/type";
import { deepCopy } from "@/utils/deepCopy";

import { StateCreator } from "zustand";
import { MazeSliceType } from "./MazeSlice";
import createQuickBTM from "@/algorithms/maze/binary-tree-maze/createQuickBTM";

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
  rows: INITIAL_GRID.rows,
  nodes: INITIAL_GRID.rows,
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
      set({
        rows: GRID_SIZE.Small.rows,
        nodes: GRID_SIZE.Small.nodes,
        gridSize: "sm",
      });
    } else if (size == "md") {
      set({
        rows: GRID_SIZE.Medium.rows,
        nodes: GRID_SIZE.Medium.nodes,
        gridSize: "md",
      });
    } else {
      set({
        rows: GRID_SIZE.Large.rows,
        nodes: GRID_SIZE.Large.nodes,
        gridSize: "lg",
      });
    }

    const { grid, startNode, goalNode } = initializeGrid(
      get()?.rows,
      get()?.nodes
    );

    // If grid's a maze, change size and add a quick maze, else just chnage grid.
    if (get().isGridMaze) {
      const maze = createQuickBTM(get()?.rows, get()?.nodes);
      set({
        grid: maze,
        cleanMaze: deepCopy(maze),
        startNode,
        goalNode,
      });
    } else {
      set({ grid, startNode, goalNode });
    }
  },
});

export default createGridSlice;
