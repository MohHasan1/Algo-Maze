import BFS from "@/algorithms/search/BFS/bfsSearch";
import useStore from "@/store/store";
import OptionSelect from "../select/OptionSelect";
import GradientText from "../typography/GradientText";
import { Button } from "../ui/button";
import { SEARCH_ALGO, SEARCH_STATUS } from "@/constants/constant";
import { Slider } from "../ui/slider";
import { logInfo } from "@/utils/log";
import DFS from "@/algorithms/search/DFS/dfsSearch";
import {  useToast } from "../Toast";

const SearchAlgoBar = () => {
  // State Variables
  const maze = useStore((state) => state.grid);
  const isGridMaze = useStore((state) => state.isGridMaze);
  const startNode = useStore((state) => state.startNode);
  const goalNode = useStore((state) => state.goalNode);
  const speed = useStore((state) => state.mazeSolveV);
  const searchAlgo = useStore((state) => state.searchAlgo);
  const isMazeAlgProgress = useStore((state) => state.isMazeAlgProgress);
  const isSearchAlgProgress = useStore((state) => state.isSearchAlgProgress);

  // State Methods
  const setGrid = useStore((state) => state.setGrid);
  const setIsMazeClean = useStore((state) => state.setIsMazeClean);
  const setMazeSolveV = useStore((state) => state.setMazeSolveV);
  const setSearchAlgo = useStore((state) => state.setSearchAlgo);
  const toggleSearcgAlgProgress = useStore(
    (state) => state.toggleSearcgAlgProgress
  );

  // Toast
  const { infoToast, errorToast, warnToast } = useToast();

  async function runAlg() {
    if (!isGridMaze) {
      infoToast("The grid is empty!", "grid-empty");
      infoToast("Please generate a maze.", "gen-maze");
      return;
    }

    if (searchAlgo === SEARCH_ALGO.NONE) {
      infoToast("Please select a Search Algorithm", "select=search");
      return;
    }

    let status: any;
    setIsMazeClean(false);
    toggleSearcgAlgProgress();

    if (searchAlgo === SEARCH_ALGO.BFS) {
      status = await BFS(maze, setGrid, goalNode, startNode, speed);
    } else if (searchAlgo === SEARCH_ALGO.DFS) {
      status = await DFS(maze, setGrid, goalNode, startNode, speed);
    }

    toggleSearcgAlgProgress();

    switch (status) {
      case SEARCH_STATUS.PathNotFound:
        warnToast("No path is found!", "no-path");
        infoToast(
          "The path is either blocked by walls or explored path!",
          "no-path-info"
        );
        break;

      case SEARCH_STATUS.ExploredAlready:
        warnToast("The path is already found!", "explored-already");
        infoToast(
          "Please change the start and goal nodes, or generate a new maze.",
          "change-maze"
        );
        break;

      case SEARCH_STATUS.OutOfBoundary:
        errorToast(
          "Error Searching the maze, please create another maze.",
          "out-of-bound"
        );
        break;

      case SEARCH_STATUS.PathFound:
        infoToast("Path found!", "path-found");
        break;

      default:
        break;
    }
  }

  function handleSpeedChange(value: number[]) {
    setMazeSolveV(200 - value[0]);
  }

  return (
    <>
      <div className="flex flex-col md:gap-3 lg:gap-5">
        <GradientText>Search Algorithm</GradientText>
        <Slider
          defaultValue={[200 - 33.5]}
          max={200}
          step={33.5}
          onValueChange={handleSpeedChange}
          disabled={isSearchAlgProgress || isMazeAlgProgress}
        />
        <OptionSelect
          placeHolder={"Search Algorithm"}
          selectItems={mazeSolvingAlg}
          disabled={isSearchAlgProgress || isMazeAlgProgress}
          Fn={setSearchAlgo}
          className="w-full"
        />
        <Button
          disabled={isSearchAlgProgress || isMazeAlgProgress}
          variant={"blue"}
          onClick={runAlg}
        >
          Search Maze
        </Button>
        {/* <Button onClick={stopSearch}>stop vis</Button> */}
      </div>
    </>
  );
};

export default SearchAlgoBar;

const mazeSolvingAlg = [
  { value: SEARCH_ALGO.BFS, label: "Breadth-First Search (BFS)" },
  { value: SEARCH_ALGO.DFS, label: "Deep-First Search (DFS)" },
];
