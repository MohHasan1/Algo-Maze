import { SEARCH_STATUS } from "@/constants/constant";
import { GridType, ParNodeType } from "@/types/type";
import {
  extractPath,
  visualizeRevPath,
  visualizeFwdPath,
} from "../visualizePath";
import { clearTimers, getSearchFlag, setSearchflag, setTimer } from "../searchState";

async function BFS(
  maze: GridType,
  setMaze: any,
  goalNode: ParNodeType,
  startNode: ParNodeType,
  speed: number = 100
) {
  setSearchflag(true);
  let searchCount = 0;
  const totalRows = maze.length;
  const totalNodesInRow = maze[0].length;

  // Add the starting node to the frontier //
  let frontier = [maze[startNode.rowNum!][startNode.nodeNum!]];
  let path = new Map<string, number[]>();

  async function processNextNode(): Promise<string> {
    return new Promise(async (resolve) => {
      if (!getSearchFlag()) {
        resolve(SEARCH_STATUS.StopSearch);
        return;
      }
      if (frontier.length === 0) {
        if (searchCount === 1) {
          resolve(SEARCH_STATUS.ExploredAlready);
        } else {
          resolve(SEARCH_STATUS.PathNotFound);
        }
        return;
      }

      // change to shift for BFS //
      const currNode = frontier.pop();
      if (!currNode) {
        resolve(SEARCH_STATUS.OutOfBoundary);
        return;
      }

      const { rowNum, nodeNum } = currNode;
      // Get neighbors (up, down, left, right)
      const neighbors = [
        { row: rowNum! - 1, node: nodeNum }, // up
        { row: rowNum! + 1, node: nodeNum }, // down
        { row: rowNum, node: nodeNum! - 1 }, // left
        { row: rowNum, node: nodeNum! + 1 }, // right
      ];

      for (const neighbor of neighbors) {
        const { row: nRow, node: nNode } = neighbor;

        // Is the neighbouring node a wall?
        const isNodeWall = maze[nRow!][nNode!].isWall;
        // Is the neighbouring node already explored?
        const isNodeExplored = maze[nRow!][nNode!].isExplored;

        if (isNodeWall || isNodeExplored) continue;

        // As all the rows at 0th and grid.length-1th index are walls, we can avoid checking them:
        const isNeighbourRowNotBoundaryWall = nRow! > 0 && nRow! < totalRows;
        // All the nodes and 0th and grid[0].length - 1th index are wall.
        const isNeighbourNodeNotBoundaryWall =
          nNode! > 0 && nNode! < totalNodesInRow;

        if (isNeighbourRowNotBoundaryWall && isNeighbourNodeNotBoundaryWall) {
          maze[nRow!][nNode!].isExplored = true;
          frontier.push(maze[nRow!][nNode!]);

          // set a map of explored path //
          path.set(`${nRow},${nNode}`, [currNode.rowNum!, currNode.nodeNum!]);

          // check if the node we explored is the goal or not? //
          const { rowNum, nodeNum } = goalNode;
          if (nRow === rowNum && nNode === nodeNum) {
            const { revPath, fwdPath } = extractPath(path, startNode, goalNode);
            await visualizeRevPath(maze, revPath, setMaze);
            await visualizeFwdPath(maze, fwdPath, setMaze);

            // If path is found but visualized is still displaying and maze is stop //
            if (!getSearchFlag()) {
              resolve(SEARCH_STATUS.PathFoundButStopSearch);
            }

            // If path is found and searchFlag is true
            resolve(SEARCH_STATUS.PathFound);
            return;
          }
        }
      }

      setMaze([...maze]);

      // Schedule the next node to be processed -- recursive call //
      const timer = setTimeout(() => processNextNode().then(resolve), speed);
      setTimer(timer);
      searchCount += 1;
    });
  }

  // Start the BFS //
  const status = await processNextNode();

  if (status === SEARCH_STATUS.StopSearch) {
    clearTimers();
  }

  return status;
}

export default BFS;
