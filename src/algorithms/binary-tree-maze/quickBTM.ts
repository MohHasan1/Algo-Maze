import { createGrid } from "../createGrid";

export function quickBTM(rows: number = 19, nodes: number = 19) {
  const grid = createGrid(rows, nodes);
  const setGrid = setUpWalls(grid);

  const maze = [...setGrid];

  maze.forEach((row) =>
    row.forEach((node) => setUpPath(maze, node.rowNum, node.nodeNum))
  );

  maze[1][1].isStart = true;
  maze[grid.length - 2][grid[0].length - 2].isGoal = true;

  return maze;
}

export function setUpWalls(grid: any[][]) {
  const newGrid = [];
  for (let row of grid) {
    const newRow = [];
    for (let node of row) {
      if (node.rowNum % 2 === 0 || node.nodeNum % 2 === 0) {
        node.isWall = true;
        node.isPath = false;
      }
      newRow.push(node);
    }
    newGrid.push(newRow);
  }
  return newGrid;
}

// takes in the setupmaze
function setUpPath(newMaze: any[][], rowNum: number, nodeNum: number) {
  if (rowNum >= newMaze.length || nodeNum >= newMaze[0].length) return;

  // Remember: We will be changing one node at a time, not the entire grid.
  const isRowAndNodeOdd = rowNum % 2 !== 0 && nodeNum % 2 !== 0;
  let dir = Math.random() < 0.5 ? 1 : 2;

  // Remember: we will break a wall in either diagonal: (R - B)
  if (isRowAndNodeOdd) {
    if (rowNum === newMaze.length - 2 && nodeNum !== newMaze[0].length - 2) {
      newMaze[rowNum][nodeNum + 1].isWall = false;
      newMaze[rowNum][nodeNum + 1].isPath = true;
      return;
    }

    if (nodeNum === newMaze[0].length - 2 && rowNum !== newMaze.length - 2) {
      newMaze[rowNum + 1][nodeNum].isWall = false;
      newMaze[rowNum + 1][nodeNum].isPath = true;
      return;
    }

    if (rowNum !== newMaze.length - 2 && nodeNum !== newMaze[0].length - 2) {
      if (dir == 1) {
        newMaze[rowNum][nodeNum + 1].isWall = false;
        newMaze[rowNum][nodeNum + 1].isPath = true;
      } else {
        newMaze[rowNum + 1][nodeNum].isWall = false;
        newMaze[rowNum + 1][nodeNum].isPath = true;
      }
    }
  }
}
