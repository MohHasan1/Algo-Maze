import useStore from "@/store/store";
import { Button } from "./ui/button";
import { quickBTM } from "@/algorithms/binary-tree-maze/quickBTM";
import { cn } from "@/lib/utils";
import { BrickWall } from "lucide-react";
import BFS from "@/algorithms/BFS/bfsSearch";
import createBTM from "@/algorithms/binary-tree-maze/createBTM";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";

function isNodeEqual(node1: any, node2: any) {
  if (node1.rowNum === node2.rowNum && node1.nodeNum === node2.nodeNum) {
    return true;
  }
  return false;
}

const ViewGrid = () => {
  const maze = useStore((state) => state.grid);
  const rows = useStore((state) => state.rows);
  const nodes = useStore((state) => state.nodes);
  const setGrid = useStore((state) => state.setGrid);
  const reset = useStore((state) => state.reset);
  const mazeSize = useStore((state) => state.setGridSize);
  // const { startNode, goalNode } = useStore(
  //   (state) => ({
  //     startNode: state.startNode,
  //     goalNode: state.goalNode,
  //   }),
  //   shallow
  // ); -> depricated
  const { startNode, goalNode, setStartNode, setGoalNode } = useStore(
    useShallow((state) => ({
      startNode: state.startNode,
      goalNode: state.goalNode,
      setStartNode: state.setStartNode,
      setGoalNode: state.setGoalNode,
    }))
  );

  async function runBFS() {
    await BFS(maze, setGrid, goalNode, startNode);
  }

  async function runBTM() {
    await createBTM(rows, nodes, setGrid);
  }

  const [isGoalClicked, setisGoalClicked] = useState<boolean>(false);
  const [isStartClicked, setisStartClicked] = useState<boolean>(false);

  function onNodeClick(node: any) {
    if (node.isWall) {
      console.log("sorry its a wall!");
    } else if (isStartClicked) {
      // later i will use subscribe function, where we will subscribe with a var, and triiger a func to change another var.
      const grid = [...maze];
      grid[startNode.rowNum][startNode.nodeNum].isStart = false;
      setStartNode(node);
      grid[node.rowNum][node.nodeNum].isStart = true;
      setGrid(grid);
    } else if (isGoalClicked) {
      const grid = [...maze];
      grid[goalNode.rowNum][goalNode.nodeNum].isGoal = false;
      setGoalNode(node);
      grid[node.rowNum][node.nodeNum].isGoal = true;
      setGrid(grid);
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          reset();
          setGrid(quickBTM(rows, nodes));
        }}
      >
        Quick BTM
      </Button>
      <Button onClick={runBTM}> BTM</Button>
      <Button onClick={runBFS}>BFS</Button>
      <Button onClick={reset}>Reset</Button>

      <Button onClick={() => mazeSize("sm")}>small</Button>
      <Button onClick={() => mazeSize("md")}>medium</Button>
      <Button onClick={() => mazeSize("lg")}>large</Button>

      <section className="relative w-fit border-red-300 ">
        {maze?.map((row, rowNum) => (
          <div key={rowNum} className="flex">
            {row.map((node) => (
              <div
                key={node.rowNum + "-" + node.nodeNum}
                onClick={() => {
                  setisStartClicked(false);
                  setisGoalClicked(false);

                  isNodeEqual(node, startNode)
                    ? setisStartClicked(true)
                    : isNodeEqual(node, goalNode)
                    ? setisGoalClicked(true)
                    : "";
                  onNodeClick(node);
                }}
                className={cn(
                  "size-5 border-gray-600 border hover:bg-slate-50 hover:cursor-pointer",
                  `${
                    node.isPath && node.isExplored
                      ? "bg-blue-400"
                      : "bg-green-900"
                  }`,
                  `${node.isWall && "bg-yellow-400"}`,
                  `${node.nodeNum === 0 && node.isWall && "bg-red-500"}`,
                  `${
                    node.nodeNum === maze[0].length - 1 &&
                    node.isWall &&
                    "bg-red-600"
                  }`,
                  `${node.rowNum === 0 && node.isWall && "bg-red-600"}`,
                  `${
                    node.rowNum === maze.length - 1 &&
                    node.isWall &&
                    "bg-red-600"
                  }`,
                  `${node.isStart && "bg-orange-950"}`,
                  `${node.isGoal && "bg-emerald-500"}`,
                  `${
                    node.isRevPath &&
                    !node.isGoal &&
                    !node.isStart &&
                    "bg-purple-500"
                  }`,
                  `${
                    node.isFwdPath &&
                    !node.isGoal &&
                    !node.isStart &&
                    "bg-green-100"
                  }`,
                  `${node.isGoalPath && "bg-yellow-700"}`
                )}
              >
                {node.isWall && (
                  <BrickWall color="grey" className="w-full h-full" />
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default ViewGrid;
