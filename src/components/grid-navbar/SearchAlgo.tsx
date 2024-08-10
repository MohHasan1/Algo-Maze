import BFS from "@/algorithms/search/BFS/bfsSearch";
import useStore from "@/store/store";
import OptionSelect from "../select/OptionSelect";
import GradientText from "../typography/GradientText";
import { Button } from "../ui/button";
import { SEARCH_ALGO, SEARCH_STATUS } from "@/constants/constant";
import { Slider } from "../ui/slider";
import { logInfo } from "@/utils/log";
import DFS from "@/algorithms/search/DFS/dfsSearch";
import { ToastContainerWrapper, useToast } from "../Toast";
import { stopSearch } from "@/algorithms/search/share";

const MazeSolvingAlgOpt = () => {
  // State Variables
  const maze = useStore((state) => state.grid);
  const isGridMaze = useStore((state) => state.isGridMaze);
  const startNode = useStore((state) => state.startNode);
  const goalNode = useStore((state) => state.goalNode);
  const inProgress = useStore((state) => state.inProgress);
  const speed = useStore((state) => state.mazeSolveV);
  const searchAlgo = useStore((state) => state.searchAlgo);

  // State Methods
  const setGrid = useStore((state) => state.setGrid);
  const toggleInProgress = useStore((state) => state.toggleInProgress);
  const setMazeSolveV = useStore((state) => state.setMazeSolveV);
  const setSearchAlgo = useStore((state) => state.setSearchAlgo);

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
    toggleInProgress();

    if (searchAlgo === SEARCH_ALGO.BFS) {
      status = await BFS(maze, setGrid, goalNode, startNode, speed);
    } else if (searchAlgo === SEARCH_ALGO.DFS) {
      status = await DFS(maze, setGrid, goalNode, startNode, speed);
    }

    toggleInProgress();

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
    logInfo(200 - value[0]);
    setMazeSolveV(200 - value[0]);
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <GradientText>Maze Solving Algorithm</GradientText>
        <Slider
          defaultValue={[200 - 33.5]}
          max={200}
          step={33.5}
          onValueChange={handleSpeedChange}
          disabled={inProgress}
        />
        <OptionSelect
          placeHolder={"Search Algorithm"}
          selectItems={mazeSolvingAlg}
          disabled={inProgress}
          Fn={setSearchAlgo}
          className="w-full"
        />
        <Button disabled={inProgress} variant={"outline"} onClick={runAlg}>
          Search Maze
        </Button>
        <Button onClick={stopSearch}>stop vis</Button>

        <ToastContainerWrapper />
      </div>
    </>
  );
};

export default MazeSolvingAlgOpt;

const mazeSolvingAlg = [
  { value: SEARCH_ALGO.BFS, label: "Breadth-First Search (BFS)" },
  { value: SEARCH_ALGO.DFS, label: "Deep-First Search (DFS)" },
];
