import { createGrid } from "@/algorithms/createGrid";
import { GridType, ParNodeType } from "@/types/type";
import { deepCopy } from "@/utils/deepCopy";

import { StateCreator } from "zustand";

type State = {
  rows: number;
  nodes: number;
  grid: GridType;
  cleanMaze: any;
  gridSize: "sm" | "md" | "lg";
  startNode: ParNodeType;
  goalNode: ParNodeType;
  inProgress: boolean;
};

type Actions = {
  setGrid: (grid: GridType) => void;
  setCleanMaze: (grid: any) => void;
  clear: () => void;
  reset: () => void;
  setGridSize: (size: "sm" | "md" | "lg") => void;
  setStartNode: (startNode: ParNodeType) => void;
  setGoalNode: (goalNode: ParNodeType) => void;
  setStartnGoalNodes: (startNode: ParNodeType, goalNode: ParNodeType) => void;
  toggleInProgress: () => void;
};

export type GridSliceType = State & Actions;

const initializeGrid = (rows: number, nodes: number) => {
  const grid = createGrid(rows, nodes);
  const startNode = grid[1][1];
  const goalNode = grid[rows - 2][nodes - 2];
  return { grid, startNode, goalNode };
};

// run only once when the app starts up:
const initialSize = { rows: 19, nodes: 19 };
const { grid, startNode, goalNode } = initializeGrid(
  initialSize.rows,
  initialSize.nodes
);

const createGridSlice: StateCreator<State & Actions> = (set, get) => ({
  // variables:
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

  setCleanMaze: (grid: GridType) => set({ cleanMaze: grid }),

  reset: () => {
    const cleanMaze = get().cleanMaze;

    set({
      grid: deepCopy(cleanMaze),
      cleanMaze: deepCopy(cleanMaze),
    });
  },

  clear: () => {
    console.log("Clearing grid...");
    const { grid, startNode, goalNode } = initializeGrid(
      get().rows,
      get().nodes
    );
    set({ grid, cleanMaze: deepCopy(grid), startNode, goalNode });
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

  toggleInProgress: () => {
    set((state) => ({ inProgress: !state.inProgress }));
  },
});

export default createGridSlice;
