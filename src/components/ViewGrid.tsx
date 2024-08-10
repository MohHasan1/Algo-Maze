import useStore from "@/store/store";
import { cn } from "@/lib/utils";
import { BrickWall } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { ParNodeType } from "@/types/type";

function isNodeEqual(node1: any, node2: any) {
  if (node1.rowNum === node2.rowNum && node1.nodeNum === node2.nodeNum) {
    return true;
  }
  return false;
}

const ViewGrid = () => {
  const maze = useStore((state) => state.grid);
  const setGrid = useStore((state) => state.setGrid);
  const { startNode, goalNode, setStartNode, setGoalNode, gridSize } = useStore(
    useShallow((state) => ({
      startNode: state.startNode,
      goalNode: state.goalNode,
      setStartNode: state.setStartNode,
      setGoalNode: state.setGoalNode,
      gridSize: state.gridSize,
    }))
  );

  // console.log(gridSize);

  const [isGoalClicked, setisGoalClicked] = useState<boolean>(false);
  const [isStartClicked, setisStartClicked] = useState<boolean>(false);

  function onNodeClick(node: any) {
    if (isNodeEqual(node, startNode) || isNodeEqual(node, goalNode)) return;

    if (node.isWall) {
      console.log("sorry its a wall!");
    } else if (isStartClicked) {
      // later i will use subscribe function, where we will subscribe with a var, and triiger a func to change another var.
      const grid = [...maze];
      grid[startNode.rowNum!][startNode.nodeNum!].isStart = false;
      setStartNode(node);
      grid[node.rowNum][node.nodeNum].isStart = true;
      setGrid(grid);
    } else if (isGoalClicked) {
      const grid = [...maze];
      grid[goalNode.rowNum!][goalNode.nodeNum!].isGoal = false;
      setGoalNode(node);
      grid[node.rowNum][node.nodeNum].isGoal = true;
      setGrid(grid);
    }
  }

  const [draggedNode, setDraggedNode] = useState<any>(null);

  function onDragStart(DraggedNode: ParNodeType) {
    setDraggedNode(DraggedNode);
  }

  function onDrop(newNode: ParNodeType) {
    if (!draggedNode) return;
    if (isNodeEqual(newNode, startNode) || isNodeEqual(newNode, goalNode))
      return;
    if (newNode.isWall) return;

    const grid = [...maze];

    if (isNodeEqual(draggedNode, startNode)) {
      grid[startNode.rowNum!][startNode.nodeNum!].isStart = false;
      setStartNode(newNode);
      grid[newNode.rowNum!][newNode.nodeNum!].isStart = true;
    } else if (isNodeEqual(draggedNode, goalNode)) {
      grid[goalNode.rowNum!][goalNode.nodeNum!].isGoal = false;
      setGoalNode(newNode);
      grid[newNode.rowNum!][newNode.nodeNum!].isGoal = true;
    }

    setGrid(grid);
    setDraggedNode(null);
  }

  return (
    <>
      <NeonGradientCard className="w-fit" padding="p-0" borderRadius={0}>
        <section className="relative w-fit  border-blue-300">
          {maze?.map((row, rowNum) => (
            <div key={rowNum} className="flex">
              {row?.map((node) => (
                <div
                  draggable={node.isStart || node.isGoal}
                  onDragStart={() => onDragStart(node)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDrop(node)}
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
                    `${gridSize === "sm" && "size-[1.81rem]"}`,
                    `${gridSize === "md" && "size-[1.31rem]"}`,
                    `${gridSize === "lg" && "size-[0.971rem]"}`,
                    "border-blue-800/70 border hover:bg-blue-200 hover:cursor-pointer ",
                    `${
                      node.isPath && node.isExplored
                        ? "bg-blue-400"
                        : "bg-blue-800/55"
                    }`,
                    `${
                      node.isWall &&
                      "bg-yellow-500 transition-colors duration-500 ease-linear"
                    }`,
                    `${node.nodeNum === 0 && node.isWall && "bg-red-600"}`,
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
                    `${
                      node.isStart &&
                      "bg-orange-950 transition-colors duration-500 ease-linear"
                    }`,
                    `${
                      node.isGoal &&
                      "bg-emerald-500 transition-colors duration-1000 ease-linear"
                    }`,
                    `${
                      node.isRevPath &&
                      !node.isGoal &&
                      !node.isStart &&
                      "bg-purple-500 transition-colors duration-500 ease-out"
                    }`,
                    `${
                      node.isFwdPath &&
                      !node.isGoal &&
                      !node.isStart &&
                      "bg-green-100 transition-colors duration-500 ease-linear"
                    }`
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
      </NeonGradientCard>
    </>
  );
};

export default ViewGrid;
