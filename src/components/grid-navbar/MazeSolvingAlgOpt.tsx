import BFS from "@/algorithms/BFS/bfsSearch";
import { useShallow } from "zustand/react/shallow";
import useStore from "@/store/store";
import OptionSelect from "../select/OptionSelect";
import GradientText from "../typography/GradientText";
import { Button } from "../ui/button";
import { SEARCH_ALGO } from "@/constants";
import { Slider } from "../ui/slider";
import { logInfo } from "@/utils/log";
import DFS from "@/algorithms/DFS/dfsSearch";

const MazeSolvingAlgOpt = () => {
  const setSearchAlgo = useStore((state) => state.setSearchAlgo)
  const searchAlgo = useStore((state) => state.searchAlgo)
  const {
    maze,
    setGrid,
    startNode,
    goalNode,
    inProgress,
    speed,
    setMazeSolveV,
    toggleInProgress,
  } = useStore(
    useShallow((state) => ({
      maze: state.grid,
      setGrid: state.setGrid,
      startNode: state.startNode,
      goalNode: state.goalNode,
      inProgress: state.inProgress,
      toggleInProgress: state.toggleInProgress,
      speed: state.mazeSolveV,
      setMazeSolveV: state.setMazeSolveV,
    }))
  );

  async function runAlg() {
    logInfo(speed);
    toggleInProgress();
    if (searchAlgo === SEARCH_ALGO.BFS) {
      await BFS(maze, setGrid, goalNode, startNode, speed);
    } else if (searchAlgo === SEARCH_ALGO.DFS) {
      await DFS(maze, setGrid, goalNode, startNode, speed);
    }
    toggleInProgress();
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
        <Button
          disabled={inProgress}
          variant={"outline"}
          onClick={runAlg}
        >
          Search Maze
        </Button>
      </div>
    </>
  );
};

export default MazeSolvingAlgOpt;

const mazeSolvingAlg = [
  { value: SEARCH_ALGO.BFS, label: "Breadth-First Search (BFS)" },
  { value: SEARCH_ALGO.DFS, label: "Deep-First Search (DFS)" },
];
