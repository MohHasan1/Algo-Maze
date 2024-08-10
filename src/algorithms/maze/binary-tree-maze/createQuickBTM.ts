import { NODE_TYPE } from "@/types/type";
import { createGrid } from "../createGrid";


export default function createQuickBTM(rows: number = 19, nodes: number = 19) {
  const grid = createGrid(rows, nodes);
  const setUpGrid = setUpWalls(grid);
  generateBTM(setUpGrid);
  const maze = initializeStartAndGoalNodes(setUpGrid);

  return maze;
}

// __ Initial setup of the grid (all even nodes and rows are made walls) to create a BTM __ //
function setUpWalls(grid: Partial<NODE_TYPE>[][]) {
  const newGrid = [];

  for (let row of grid) {
    const newRow = [];
    for (let node of row) {
      const isRowOrNodeEven = node.rowNum! % 2 === 0 || node.nodeNum! % 2 === 0;

      if (isRowOrNodeEven) {
        node.isWall = true;
        node.isPath = false;
      }
      newRow.push(node);
    }
    newGrid.push(newRow);
  }
  return newGrid;
}

// __ Create a BTM using the setup grid  __ //
function generateBTM(setUpGrid: Partial<NODE_TYPE>[][]) {
  setUpGrid.forEach((row) =>
    row.forEach((node) =>
      breakWallInMaze(setUpGrid, node.rowNum!, node.nodeNum!)
    )
  );
}

// __ Breaks a wall in the maze grid to create a path, based on random direction. __ //
function breakWallInMaze(
  setUpGrid: Partial<NODE_TYPE>[][],
  rowNum: number,
  nodeNum: number
) {
  if (rowNum >= setUpGrid.length || nodeNum >= setUpGrid[0].length) return;

  const ROWS = setUpGrid.length;
  const COLS = setUpGrid[0].length;
  const SEC_LAST_ROW = ROWS - 2;
  const SEC_LAST_NODE = COLS - 2;
  const direction = Math.random() < 0.5 ? "left" : "right";
  // Remember: We will be changing one node at a time, not the entire grid.
  const isRowAndNodeOdd = rowNum % 2 !== 0 && nodeNum % 2 !== 0;

  // Remember: we will break a wall (even-walls) in either direction: (R - D)
  if (isRowAndNodeOdd) {
    if (rowNum === SEC_LAST_ROW && nodeNum !== SEC_LAST_NODE) {
      setUpGrid[rowNum][nodeNum + 1].isWall = false;
      setUpGrid[rowNum][nodeNum + 1].isPath = true;
      return;
    }

    if (nodeNum === SEC_LAST_NODE && rowNum !== SEC_LAST_ROW) {
      setUpGrid[rowNum + 1][nodeNum].isWall = false;
      setUpGrid[rowNum + 1][nodeNum].isPath = true;
      return;
    }

    if (rowNum !== SEC_LAST_ROW && nodeNum !== SEC_LAST_NODE) {
      if (direction == "left") {
        setUpGrid[rowNum][nodeNum + 1].isWall = false;
        setUpGrid[rowNum][nodeNum + 1].isPath = true;
      } else {
        setUpGrid[rowNum + 1][nodeNum].isWall = false;
        setUpGrid[rowNum + 1][nodeNum].isPath = true;
      }
    }
  }
}

// __ Sets the start and goal nodes in the maze grid __ //
function initializeStartAndGoalNodes(setUpGrid: Partial<NODE_TYPE>[][]) {
  setUpGrid[1][1].isStart = true;
  setUpGrid[setUpGrid.length - 2][setUpGrid[0].length - 2].isGoal = true;

  return setUpGrid;
}
