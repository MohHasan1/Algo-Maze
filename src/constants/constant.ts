export const INITIAL_GRID = { rows: 21, nodes: 21 };

export const GRID_SIZE = {
  Small: { rows: 21, nodes: 21 },
  Medium: { rows: 29, nodes: 29 },
  Large: { rows: 39, nodes: 39 },
};

// Local Storage //
export const LOCAL_STORAGE = { IS_INTRO_SHOWN: "isIntroShown" };

// Search Alg //
export const SEARCH_ALGO = {
  NONE: "none",
  BFS: "bfs",
  DFS: "dfs",
};

// Maze Alg //
export const MAZE_ALGO = {
  BTM: "btm",
};

// SEARCH_STATUS //
export const SEARCH_STATUS = {
  PathFound: "path-found",
  PathNotFound: "path-not-found",
  ExploredAlready: "explored-already",
  OutOfBoundary: "out-of-boundary",
  StopSearch: "stop-search",
  PathFoundButStopSearch: "path-found-stop-search",
};

export const MAZE_STATUS = {
  MazeGenStop: "maz-gen-stop",
};
