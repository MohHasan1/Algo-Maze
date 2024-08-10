import { createGrid } from "@/algorithms/maze/createGrid";

export const initializeGrid = (rows: number, nodes: number) => {
  const grid = createGrid(rows, nodes);
  const startNode = grid[1][1];
  const goalNode = grid[rows - 2][nodes - 2];
  return { grid, startNode, goalNode };
};
