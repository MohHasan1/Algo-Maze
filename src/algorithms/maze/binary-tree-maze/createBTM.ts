import { GridType, NODE_TYPE } from "@/types/type";
import { createGrid } from "../createGrid";
import { getMazeGenFlag, setMazeGenFlag, setMazeTimer } from "../mazeState";
import { MAZE_STATUS } from "@/constants/constant";

export default async function createBTM(
  rows: number,
  nodes: number,
  setMaze: (grid: GridType) => void
) {
  setMazeGenFlag(true);
  const grid = createGrid(rows, nodes);

  try {
    await setUpGridWalls(grid, setMaze);
    await generateBTM(grid, setMaze);
    await initializeStartAndGoalNodes(grid, setMaze);
  } catch (stopStatus) {
    return stopStatus as string;
  }

  return grid;
}

// __ pre-grid-setup (all even nodes and rows are made walls) to create a BTM __ //
async function setUpGridWalls(
  grid: GridType,
  setMaze: (grid: GridType) => void
) {
  const maxRow = grid.length;
  const maxNodeinRow = grid[0].length;

  // Function to recursively set walls
  async function setWalls(rowNum: number, nodeNum: number): Promise<void> {
    if (!getMazeGenFlag()) throw MAZE_STATUS.MazeGenStop;
    if (rowNum >= maxRow) return;

    const doesRowExist = grid[rowNum];
    const doesNodeExist = grid[rowNum][nodeNum];
    const isRowOrNodeEven = rowNum % 2 === 0 || nodeNum % 2 === 0;

    let nextRowNum = rowNum;
    let nextNodeNum = nodeNum + 1;
    if (nodeNum >= maxNodeinRow) {
      nextRowNum = rowNum + 1;
      nextNodeNum = 0;
    }

    if (doesRowExist && doesNodeExist && isRowOrNodeEven) {
      grid[rowNum][nodeNum].isWall = true;
      grid[rowNum][nodeNum].isPath = false;
    }

    // Deep copy grid to avoid shallow copy issues
    setMaze([...grid]);

    // Use await for non-blocking execution (a way to introduce delay)
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 0);
      setMazeTimer(timer);
    });
    // will wait till the promise is resolve
    await setWalls(nextRowNum, nextNodeNum);
  }

  // Start recursion and return the final promise
  await setWalls(0, 0);
}

// Generating Binary Tree Maze using the setup Grid. //
async function generateBTM(
  preSetGrid: GridType,
  setMaze: (grid: GridType) => void
) {
  const maxRow = preSetGrid.length;
  const maxNodeinRow = preSetGrid[0].length;

  // Function to recursively remove walls
  async function removeWalls(rowNum: number, nodeNum: number) {
    if (!getMazeGenFlag()) throw MAZE_STATUS.MazeGenStop;

    // Check if we have processed all rows
    if (rowNum >= maxRow) return;

    const doesRowExist = preSetGrid[rowNum];
    const doesNodeExist = preSetGrid[rowNum][nodeNum];

    let nextRowNum = rowNum;
    let nextNodeNum = nodeNum + 1;
    if (nodeNum >= maxNodeinRow) {
      nextRowNum = rowNum + 1;
      nextNodeNum = 0;
    }

    if (doesRowExist && doesNodeExist) {
      breakWallInMaze(preSetGrid, rowNum, nodeNum);
      setMaze([...preSetGrid]); // Ensure a fresh grid copy is used
    }

    // Use setTimeout for non-blocking execution
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 0);
      setMazeTimer(timer);
    });

    await removeWalls(nextRowNum, nextNodeNum);
  }

  // Start the wall removal process
  await removeWalls(0, 0);

  return preSetGrid;
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
async function initializeStartAndGoalNodes(
  maze: GridType,
  setMaze: (grid: GridType) => void
) {
  const points = [maze[1][1], maze[maze.length - 2][maze[0].length - 2]];

  async function addPoints(index: number) {
    if (!getMazeGenFlag()) throw MAZE_STATUS.MazeGenStop;
    if (index >= points.length) return;

    if (index === 0) {
      points[index].isStart = true;
    } else {
      points[index].isGoal = true;
    }

    setMaze([...maze]);
    // wait for a bit to introduce delay // we resolve the promise after some time ms.
    await new Promise((resolve) => setTimeout(resolve, 150)); //

    // wait till the work is done and the call again //
    await addPoints(index + 1);
  }

  // we want to wait untill it finishes //
  await addPoints(0);

  return maze;
}
