import BFS from "@/algorithms/BFS/bfsSearch";
import { useShallow } from "zustand/react/shallow";
import useStore from "@/store/store";
import OptionSelect from "../OptionSelect";
import GradientText from "../typography/GradientText";

const MazeSolvingAlgOpt = () => {
  const maze = useStore((state) => state.grid);
  const setGrid = useStore((state) => state.setGrid);
  const inProgress = useStore((state) => state.inProgress);
  const { startNode, goalNode } = useStore(
    useShallow((state) => ({
      startNode: state.startNode,
      goalNode: state.goalNode,
    }))
  );

  async function runBFS() {
    await BFS(maze, setGrid, goalNode, startNode);
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <GradientText>Maze Solving Algorithm</GradientText>
        <OptionSelect
          placeHolder={"Maze Solver"}
          selectItems={mazeSolvingAlg}
          disabled={inProgress}
          Fn={runBFS}
        />
      </div>
    </>
  );
};

export default MazeSolvingAlgOpt;

const mazeSolvingAlg = [{ value: "bfs", label: "Breadth-First Search (BFS)" }];
