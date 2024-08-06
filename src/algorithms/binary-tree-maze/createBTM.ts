import { createGrid } from "../createGrid";

async function createBTM(rows: number, nodes: number, setMaze?: any) {
  const grid: any = createGrid(rows, nodes);

  const setGrid = setUpGridWalls(grid, setMaze);

  grid[1][1].isStart = true;
  grid[grid.length - 2][grid[0].length - 2].isGoal = true;

  const maze: any = await generateBTM(setGrid, setMaze);


  return maze;
}

// pre-grid-setup for generating Binary Tree Maze. //
function setUpGridWalls(grid: any[][], setMaze: any) {
  function setWalls(rowNum: number, nodeNum: number) {
    if (rowNum >= grid.length) return;

    const doesRowExist = grid[rowNum];
    const doesNodeExist = grid[rowNum][nodeNum];
    const isRowOrNodeEven = rowNum % 2 === 0 || nodeNum % 2 === 0;

    let nextRowNum = rowNum;
    let nextNodeNum = nodeNum + 1;
    if (nodeNum >= grid[0].length) {
      nextRowNum = rowNum + 1;
      nextNodeNum = 0;
    }

    if (doesRowExist && doesNodeExist && isRowOrNodeEven) {
      grid[rowNum][nodeNum].isWall = true;
      grid[rowNum][nodeNum].isPath = false;
    }

    setMaze([...grid]);

    setTimeout(() => setWalls(nextRowNum, nextNodeNum), 0);
  }

  setWalls(0, 0);

  return [...grid];
}

// Generating Binary Tree Maze using the setup Grid. //
function generateBTM(preSetGrid: any, setMaze: any): Promise<any> {
  return new Promise((resolve) => {
    function removeWalls(rowNum: number, nodeNum: number) {
      if (rowNum >= preSetGrid.length) {
        resolve(preSetGrid); // Resolve the promise once the maze generation is complete
        return;
      }

      const doesRowExist = preSetGrid[rowNum];
      const doesNodeExist = preSetGrid[rowNum][nodeNum];

      let nextRowNum = rowNum;
      let nextNodeNum = nodeNum + 1;
      if (nodeNum >= preSetGrid[0].length) {
        nextRowNum = rowNum + 1;
        nextNodeNum = 0;
      }

      if (doesRowExist && doesNodeExist) {
        setNode(preSetGrid, rowNum, nodeNum);
        setMaze([...preSetGrid]);
      }

      setTimeout(() => removeWalls(nextRowNum, nextNodeNum), 25);
    }
    removeWalls(0, 0);
  });
}

// Removes Walls and connect nodes to create a path. //
function setNode(newMaze: any[][], rowNum: number, nodeNum: number) {
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

export default createBTM;
