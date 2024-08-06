import { quickBTM } from "@/algorithms/binary-tree-maze/quickBTM";
import { Button } from "./ui/button";
import useStore from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import BFS from "@/algorithms/BFS/bfsSearch";
import createBTM from "@/algorithms/binary-tree-maze/createBTM";

const GridNavBar = () => {
  const maze = useStore((state) => state.grid);
  const rows = useStore((state) => state.rows);
  const nodes = useStore((state) => state.nodes);
  const setGrid = useStore((state) => state.setGrid);
  const reset = useStore((state) => state.reset);
  const mazeSize = useStore((state) => state.setGridSize);
  const { startNode, goalNode } = useStore(
    useShallow((state) => ({
      startNode: state.startNode,
      goalNode: state.goalNode,
    }))
  );
  async function runBFS() {
    await BFS(maze, setGrid, goalNode, startNode);
  }

  async function runBTM() {
    await createBTM(rows, nodes, setGrid);
  }

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="flex gap-5">
          <p className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-4xl font-semibold leading-none text-transparent bg-gradient-to-b from-black to-gray-300/80 dark:from-gray-400 dark:to-blue-500/10">
            Maze Size
          </p>
          <Button onClick={() => mazeSize("sm")}>small</Button>
          <Button onClick={() => mazeSize("md")}>medium</Button>
          <Button onClick={() => mazeSize("lg")}>large</Button>
        </div>
        <div className="flex gap-5">
          <p className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-4xl font-semibold leading-none text-transparent bg-gradient-to-b from-black to-gray-300/80 dark:from-gray-400 dark:to-blue-500/10">
            Maze Generating Algorithm
          </p>
          <Button onClick={runBTM}> BTM</Button>
          <Button
          variant={"outline"}
            onClick={() => {
              reset();
              setGrid(quickBTM(rows, nodes));
            }}
          >
            Quick BTM
          </Button>
        </div>
        <div className="flex gap-5">
          <p className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-4xl font-semibold leading-none text-transparent bg-gradient-to-b from-black to-gray-300/80 dark:from-gray-400 dark:to-blue-500/10">
            Maze Solving Algorithm
          </p>
          <Button onClick={runBFS}>BFS</Button>
        </div>
        <div className="flex gap-5">
          <p className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-4xl font-semibold leading-none text-transparent bg-gradient-to-b from-black to-gray-300/80 dark:from-gray-400 dark:to-blue-500/10">
            Maze Reset
          </p>
          <Button   variant={"destructive"} onClick={reset}>Reset</Button>
        </div>
      </section>
    </>
  );
};

export default GridNavBar;
