import { useEffect, useState } from "react";
import { BorderBeam } from "./magicui/border-beam";
import { cn } from "@/lib/utils";
import { BrickWall } from "lucide-react";
import createBTM from "@/algorithms/binary-tree-maze/createBTM";
import BFS from "@/algorithms/BFS/bfsSearch";
import { createGrid } from "@/algorithms/createGrid";

const RecursiveAnime = () => {
  const [maze, setMaze] = useState<any[][]>(createGrid(19, 19));
  // we can create  hook and reuse it by passing the updated state.

  useEffect(() => {
    const generateMazeAndRunBFS = async () => {
      const maze = await createBTM(39, 39, setMaze);
      console.log("Maze generation complete");

      await BFS(
        maze,
        setMaze,
        maze[maze.length - 2][maze[0].length - 2],
        maze[1][1]
      );
      console.log("BFS complete");
    };

    generateMazeAndRunBFS();
  }, []);

  // 19,19 -> size-8
  // 29, 29 -> size-7
  return (
    <>
      <section className="relative w-fit border-red-300 ">
        <BorderBeam size={1500} borderWidth={3} />
        {maze?.map((row, rowNum) => (
          <div key={rowNum} className="flex">
            {row.map((node) => (
              <div
                key={node.rowNum + "-" + node.nodeNum}
                className={cn(
                  "size-5 border-gray-600 border",
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
                  `${node.isRevPath && "bg-purple-500"}`,
                  `${node.isGoalPath && "bg-yellow-700"}`
                )}
              >
                {/* {node.nodeNum} */}
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

export default RecursiveAnime;
