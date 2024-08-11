import { Button } from "../ui/button";

import useStore from "@/store/store";
import OptionSelect from "../select/OptionSelect";
import GradientText from "../typography/GradientText";

import { deepCopy } from "@/utils/deepCopy";
import { MAZE_ALGO, MAZE_STATUS } from "@/constants/constant";
import { GridType } from "@/types/type";
import createBTM from "@/algorithms/maze/binary-tree-maze/createBTM";
import createQuickBTM from "@/algorithms/maze/binary-tree-maze/createQuickBTM";
import { stopMazeGen } from "@/algorithms/maze/mazeState";

const MazeAlgoBar = () => {
  const rows = useStore((state) => state.rows);
  const nodes = useStore((state) => state.nodes);
  const mazeAlgo = useStore((state) => state.mazeAlgo);
  const isMazeAlgProgress = useStore((state) => state.isMazeAlgProgress);
  const isSearchAlgProgress = useStore((state) => state.isSearchAlgProgress);

  const setGrid = useStore((state) => state.setGrid);
  const setMazeAlgo = useStore((state) => state.setMazeAlgo);
  const setCleanMaze = useStore((state) => state.setCleanMaze);
  const toggleMazeAlgProgress = useStore(
    (state) => state.toggleMazeAlgProgress
  );

  async function runMazeAlgo() {
    let algRes: GridType | string;

    toggleMazeAlgProgress();

    if (mazeAlgo === MAZE_ALGO.BTM) {
      algRes = await createBTM(rows, nodes, setGrid);
    }

    // If the maze gen is stopped mid way, createBTM() returns a string and we dont want to set the clean maze.
    if (algRes! !== MAZE_STATUS.MazeGenStop) {
      setCleanMaze(deepCopy(algRes!));
    }

    toggleMazeAlgProgress();
  }

  function runQuickMazeAlgo() {
    // If the maze gen is running stop it.
    stopMazeGen();

    const maze = createQuickBTM(rows, nodes);
    setGrid(deepCopy(maze));
    setCleanMaze(deepCopy(maze));
  }

  return (
    <>
      <div className="flex flex-col md:gap-3 lg:gap-5">
        <GradientText>Maze Algorithm</GradientText>

        <div className="flex gap-5">
          <OptionSelect
            placeHolder={"Maze Algorithm"}
            selectItems={mazeGenAlg}
            Fn={setMazeAlgo}
            className="w-full"
            disabled={isMazeAlgProgress || isSearchAlgProgress}
          />
          <Button disabled={isSearchAlgProgress} onClick={runQuickMazeAlgo}>
            Quick Maze
          </Button>
        </div>

        <Button
          disabled={isMazeAlgProgress || isSearchAlgProgress}
          variant={"outline"}
          onClick={runMazeAlgo}
        >
          Generate Maze
        </Button>

        {/* <Button onClick={stopMazeGen}>Stop Maze Gen</Button> */}
      </div>
    </>
  );
};

export default MazeAlgoBar;

const mazeGenAlg = [{ value: MAZE_ALGO.BTM, label: "Binary Tree Maze (BTM)" }];
