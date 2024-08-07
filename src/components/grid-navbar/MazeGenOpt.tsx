import { quickBTM } from "@/algorithms/binary-tree-maze/quickBTM";
import { Button } from "../ui/button";
import createBTM from "@/algorithms/binary-tree-maze/createBTM";
import useStore from "@/store/store";
import OptionSelect from "../OptionSelect";
import GradientText from "../typography/GradientText";

const MazeGenOpt = () => {
  const rows = useStore((state) => state.rows);
  const nodes = useStore((state) => state.nodes);
  const setGrid = useStore((state) => state.setGrid);
  const reset = useStore((state) => state.reset);

  async function runBTM() {
    await createBTM(rows, nodes, setGrid);
  }

  function runQuickMaze() {
    reset();
    setGrid(quickBTM(rows, nodes));
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <GradientText>Maze Generating Algorithm</GradientText>

        <div className="flex gap-5">
          <OptionSelect
            placeHolder={"Maze Generator"}
            selectItems={mazeGenAlg}
            Fn={runBTM}
          />
          <Button onClick={runQuickMaze}>Quick Maze</Button>
        </div>
      </div>
    </>
  );
};

export default MazeGenOpt;

const mazeGenAlg = [{ value: "BTM", label: "Binary Tree" }];
