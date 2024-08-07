import { createGrid } from "@/algorithms/createGrid";
import { create } from "zustand";

type State = {
  rows: number;
  nodes: number;
  grid: any[][];
  gridSize: "sm" | "md" | "lg";
  startNode: any;
  goalNode: any;
  inProgress: boolean;
};

type Actions = {
  setGrid: (grid: any[][]) => void;
  reset: () => void;
  setGridSize: (size: "sm" | "md" | "lg") => void;
  setStartNode: (startNode: any) => void;
  setGoalNode: (goalNode: any) => void;
  setStartnGoalNodes: (startNode: any, goalNode: any) => void;
  toggleInProgress: () => void;
};

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

// if u r using a fun too set a variable, and u use this var to set another variables, it may cause issue, so we use a initialze function.
const useStore = create<State & Actions>((set, get) => ({
  // variables:
  rows: 19,
  nodes: 19,
  grid: grid,
  gridSize: "sm",
  startNode: startNode,
  goalNode: goalNode,
  inProgress: false,

  // Methods:
  setGrid: (grid: any[][]) => set({ grid: grid }),
  reset: () => {
    const { grid, startNode, goalNode } = initializeGrid(
      get().rows,
      get().nodes
    );
    set({ grid, startNode, goalNode });
  },
  setStartnGoalNodes: (startNode: any, goalNode: any) => {
    set(() => ({ startNode: startNode, goalNode: goalNode }));
  },
  setStartNode: (startNode: any) => {
    set(() => ({ startNode }));
  },
  setGoalNode: (goalNode: any) => {
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
}));

export default useStore;
