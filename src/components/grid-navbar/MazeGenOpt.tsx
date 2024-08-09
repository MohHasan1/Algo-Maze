import { Button } from "../ui/button";
import createBTM from "@/algorithms/binary-tree-maze/createBTM";
import useStore from "@/store/store";
import OptionSelect from "../select/OptionSelect";
import GradientText from "../typography/GradientText";
import createQuickBTM from "@/algorithms/binary-tree-maze/createQuickBTM";
import { deepCopy } from "@/utils/deepCopy";
import { MAZE_ALGO } from "@/constants";
import { GridType } from "@/types/type";

const MazeGenOpt = () => {
  const rows = useStore((state) => state.rows);
  const nodes = useStore((state) => state.nodes);
  const setGrid = useStore((state) => state.setGrid);
  const clear = useStore((state) => state.clear);
  const inProgress = useStore((state) => state.inProgress);
  const toggleInProgress = useStore((state) => state.toggleInProgress);
  const setCleanMaze = useStore((state) => state.setCleanMaze);
  const setMazeAlgo = useStore((state) => state.setMazeAlgo);
  const mazeAlgo = useStore((state) => state.mazeAlgo);

  async function runMazeAlgo() {
    let maze: GridType;
    toggleInProgress();
    if (mazeAlgo === MAZE_ALGO.BTM) {
      maze = await createBTM(rows, nodes, setGrid);
    }

    setCleanMaze(deepCopy(maze!));
    toggleInProgress();
  }

  function runQuickMaze() {
    clear();
    const maze = createQuickBTM(rows, nodes);
    setGrid(deepCopy(maze));
    setCleanMaze(deepCopy(maze));
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <GradientText>Maze Generating Algorithm</GradientText>

        <div className="flex gap-5">
          <OptionSelect
            placeHolder={"Maze Algorithm"}
            selectItems={mazeGenAlg}
            Fn={setMazeAlgo}
            className="w-full"
            disabled={inProgress}
          />
          <Button disabled={inProgress} onClick={runQuickMaze}>
            Quick Maze
          </Button>
        </div>
        <Button disabled={inProgress} variant={"outline"} onClick={runMazeAlgo}>
          Create Maze
        </Button>
      </div>
    </>
  );
};

export default MazeGenOpt;

const mazeGenAlg = [{ value: MAZE_ALGO.BTM, label: "Binary Tree" }];
