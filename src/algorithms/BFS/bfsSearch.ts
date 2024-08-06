async function visualizeRevPath(
  maze: any[][],
  path: any,
  startNode: any,
  goalNode: any,
  setMaze: any
) {
  let fwdPath: any[] = [];
  let node = `${goalNode.rowNum},${goalNode.nodeNum}`;

  while (node !== `${startNode.rowNum},${startNode.nodeNum}`) {
    fwdPath.push(node);
    node = `${path[node][0]},${path[node][1]}`;
  }
  fwdPath.push(node);

  console.log(fwdPath);

  // Visualize the path step by step
  async function visualizeStep(index: number) {
    return new Promise<any>((resolve) => {
      if (index >= fwdPath.length) {
        resolve(fwdPath);
        return fwdPath;
      }

      const pos = fwdPath[index];
      const [row, nodeNum] = pos.split(",").map(Number);

      maze[row][nodeNum].isRevPath = true;

      setMaze([...maze]);

      setTimeout(() => {
        visualizeStep(index + 1).then(resolve);
      }, 50); // Delay of 50ms for each step
    });
  }

  return await visualizeStep(0);
}
async function visualizeFwdPath(maze: any[][], path: any[], setMaze: any) {
  // Visualize the path step by step
  async function visualizeStep(index: number) {
    return new Promise<void>((resolve) => {
      if (index >= path.length) {
        resolve();
        return;
      }

      const pos = path[index];
      const [row, nodeNum] = pos.split(",").map(Number);

      maze[row][nodeNum].isRevPath = false;
      maze[row][nodeNum].isFwdPath = true;

      setMaze([...maze]);

      setTimeout(() => {
        visualizeStep(index + 1).then(resolve);
      }, 50); // Delay of 50ms for each step
    });
  }

  await visualizeStep(0);
}


async function BFS(maze: any[][], setMaze: any, goalNode: any, startNode: any) {
  const totalRows = maze.length;
  const totalNodesInRow = maze[0].length;

  let frontier: any[] = [maze[startNode.rowNum][startNode.nodeNum]]; // Add the starting node to the frontier
  // let path: any = {};
  let path: any = new Map();

  async function processNextNode(): Promise<void> {
    return new Promise(async (resolve) => {
      if (frontier.length === 0) {
        // replaced 'while' with a 'if' as its recursive.
        console.log("Search complete");
        resolve();
        return;
      }

      const currNode: any = frontier.shift(); // Change to shift for BFS./ to pop for DFS
      if (!currNode) {
        resolve();
        return;
      }

      const { rowNum, nodeNum } = currNode;
      // Get neighbors (up, down, left, right)
      const neighbors = [
        { row: rowNum - 1, node: nodeNum }, // up
        { row: rowNum + 1, node: nodeNum }, // down
        { row: rowNum, node: nodeNum - 1 }, // left
        { row: rowNum, node: nodeNum + 1 }, // right
      ];

      for (const neighbor of neighbors) {
        const { row, node } = neighbor;

        // Is the neighbouring node a wall?
        const isNodeWall = maze[row][node].isWall;
        // Is the neighbouring node already explored?
        const isNodeExplored = maze[row][node].isExplored;

        if (isNodeWall || isNodeExplored) continue;

        // As all the rows at 0th and grid.length-1th index are walls, we can avoid checking them:
        const isRowBoundaryWall = row > 0 && row < totalRows;
        // All the nodes and 0th and grid[0].length - 1th index are wall.
        const isNodeBoundaryWall = node > 0 && node < totalNodesInRow;

        if (isRowBoundaryWall && isNodeBoundaryWall) {
          maze[row][node].isExplored = true;
          frontier.push(maze[row][node]);
          console.log(`Explored node at (${row}, ${node})`);

          // set a map of explored path:
          path[`${row},${node}`] = [currNode.rowNum, currNode.nodeNum];

          // check if the node we explored is the goal or not?
          const { rowNum, nodeNum } = goalNode;
          if (row === rowNum && node === nodeNum) {
            const fwdPath = await visualizeRevPath(maze, path, startNode, goalNode, setMaze);

          const reversedPath = fwdPath.reverse();
          await visualizeFwdPath(maze, reversedPath, setMaze);
          resolve();
          return;
          }
        }
      }

      setMaze([...maze]);

      // Schedule the next node to be processed -- recursive call
      setTimeout(() => processNextNode().then(resolve), 100);
    });
  }

  // Start the process
  await processNextNode();
}

export default BFS;
