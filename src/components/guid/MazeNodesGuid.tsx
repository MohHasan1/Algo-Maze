import createQuickBTM from "@/algorithms/maze/binary-tree-maze/createQuickBTM";
import { cn } from "@/lib/utils";
import { ParNodeType } from "@/types/type";
import { logInfo } from "@/utils/log";
import { BrickWall } from "lucide-react";
import { useState } from "react";
import { useToast } from "../Toast";
import { initializeGrid } from "@/algorithms/maze/initialGrid";
import GuidWrp from "../wrapper/GuidWrp";

const MazeNodesGuid = () => {
  return (
    <>
      <GuidWrp>
        <p className="text-2xl font-semibold text-blue-300 mb-4 subpixel-antialiased">
          Changing Start and Goal Nodes
        </p>
        <div className="flex justify-center items-center gap-5 text-left">
          <Maze />

          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-200">
              You can change the start or goal node by
              <span className="text-blue-400"> clicking </span> on the node and
              then clicking the node you want to swap with.
            </p>

            <p>
              <span className="text-blue-400">You can also drag</span> to move
              the node if you are on a laptop or computer.
            </p>
          </div>
        </div>

        <p className="text-lg text-blue-300 my-2 italic">
          Try pressing on the start or goal node and then swipe to any other
          non-wall node.
        </p>
      </GuidWrp>
    </>
  );
};

const Maze = () => {
  const BTM = createQuickBTM(11, 11);
  const { startNode: initStartNode, goalNode: initGoalNode } = initializeGrid(
    11,
    11
  );

  const [maze, setMaze] = useState(BTM);
  const [startNode, setStartNode] = useState(initStartNode);
  const [goalNode, setGoalNode] = useState(initGoalNode);

  const { errorToast } = useToast();

  const [isStartClicked, setisStartClicked] = useState<boolean>(false);
  const [isGoalClicked, setisGoalClicked] = useState<boolean>(false);

  function onNodeClick(clickedNode: ParNodeType) {
    setisStartClicked(false);
    setisGoalClicked(false);

    if (isNodeEqual(clickedNode, startNode)) {
      setisStartClicked(true);
      logInfo("start node");
    } else if (isNodeEqual(clickedNode, goalNode)) {
      logInfo("goal node");
      setisGoalClicked(true);
    }

    logInfo("start", isStartClicked);
    logInfo("goal", isGoalClicked);
    changeNode(clickedNode);
  }

  function changeNode(node: ParNodeType) {
    if (isNodeEqual(node, startNode) || isNodeEqual(node, goalNode)) return;

    if (node.isWall) {
      errorToast("Sorry, its a wall", "wall");
      return;
    }

    if (isStartClicked) {
      logInfo("moving start node");
      maze[startNode.rowNum!][startNode.nodeNum!].isStart = false;
      setStartNode(node);
      maze[node.rowNum!][node.nodeNum!].isStart = true;
      setMaze(maze);
    } else if (isGoalClicked) {
      logInfo("moving goal node");
      maze[goalNode.rowNum!][goalNode.nodeNum!].isGoal = false;
      setGoalNode(node);
      maze[node.rowNum!][node.nodeNum!].isGoal = true;
      setMaze(maze);
    }
  }

  return (
    <section className="w-fit">
      {maze?.map((row, rowNum) => (
        <div key={rowNum} className="flex">
          {row?.map((node) => (
            <div
              key={node.rowNum + "-" + node.nodeNum}
              onClick={() => onNodeClick(node)}
              className={cn(
                "border-blue-800/70 border hover:bg-blue-200 hover:cursor-pointer md:size-6 lg:size-7",
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
                  node.rowNum === maze.length - 1 && node.isWall && "bg-red-600"
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
              {node.isWall && <BrickWall color="grey" className="size-full" />}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

function isNodeEqual(node1: any, node2: any) {
  if (node1.rowNum === node2.rowNum && node1.nodeNum === node2.nodeNum) {
    return true;
  }
  return false;
}

export default MazeNodesGuid;
