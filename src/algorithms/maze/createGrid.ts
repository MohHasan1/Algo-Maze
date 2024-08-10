import { NODE_TYPE } from "@/types/type";

export function createGrid(maxRows: number=19, maxNodes: number=19) {
  const grid = [];
  for (let rowNum = 0; rowNum < maxRows; rowNum++) {
    const newRow = createRowOfNodes(rowNum, maxNodes);
    grid.push(newRow);
  }

  return grid;
}

function createRowOfNodes(rowNum: number, maxNodes: number) {
  const row:Partial<NODE_TYPE>[] = [];
  for (let nodeNum = 0; nodeNum < maxNodes; nodeNum++) {
    row.push({
      rowNum,
      nodeNum,
      isStart: false,
      isGoal: false,
      isWall: false,
      isPath: true,
    });
  }
  return row;
}

/*
1 2
^ ^
| |
r r r -> r1
r r r -> r2
*/
