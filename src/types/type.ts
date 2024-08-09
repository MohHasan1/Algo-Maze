export type NODE_TYPE = {
  rowNum: number;
  nodeNum: number;
  isStart: boolean;
  isGoal: boolean;
  isWall: boolean;
  isPath: boolean;
  isExplored: boolean;
  isRevPath: boolean;
  isFwdPath: boolean;
};

export type ParNodeType = Partial<NODE_TYPE>

export type GridType = Partial<NODE_TYPE>[][];
