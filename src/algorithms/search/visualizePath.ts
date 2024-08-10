import { ParNodeType, GridType } from "@/types/type";
import { getSearchFlag, setTimer } from "./share";

export function extractPath(
  path: Map<string, number[]>,
  startNode: ParNodeType,
  goalNode: ParNodeType
) {
  // we start from goal node and make our way to start node //

  let revPath: string[] = [];
  // start with the goal node //
  let node = `${goalNode.rowNum},${goalNode.nodeNum}`;

  while (node !== `${startNode.rowNum},${startNode.nodeNum}`) {
    revPath.push(node);
    node = path.get(node)?.toString()!;
  }

  // Add the start node, as when we reach the start node, the while loop stops //
  revPath.push(node);

  const fwdPath = [...revPath].reverse();
  return { revPath, fwdPath };
}

export async function visualizeRevPath(
  maze: GridType,
  path: string[],
  setMaze: any
) {
  async function visualizeStep(index: number) {
    if (!getSearchFlag()) {
      return;
    }
    if (index >= path.length) {
      return;
    }

    const pos = path[index];
    const [row, nodeNum] = pos.split(",").map(Number);

    maze[row][nodeNum].isRevPath = true;

    setMaze([...maze]);

    // Introduce a delay and also store the timer id in the array. //
    // So we can stop the timer when  we stop the array. //
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 50);
      setTimer(timer);
    });

    await visualizeStep(index + 1);
  }
  // when we retun we come back here! //
  await visualizeStep(0);
}

export async function visualizeFwdPath(
  maze: GridType,
  path: string[],
  setMaze: any
) {
  async function visualizeStep(index: number) {
    if (!getSearchFlag()) {
      return;
    }
    if (index >= path.length) {
      return;
    }

    const pos = path[index];
    const [row, nodeNum] = pos.split(",").map(Number);

    maze[row][nodeNum].isRevPath = false;
    maze[row][nodeNum].isFwdPath = true;

    setMaze([...maze]);

    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 50);
      setTimer(timer);
    });

    await visualizeStep(index + 1);
  }

  await visualizeStep(0);
}

