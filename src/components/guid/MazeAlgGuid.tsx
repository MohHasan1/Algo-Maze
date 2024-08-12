import OptionSelect from "@/components/select/OptionSelect";
import GradientText from "@/components/typography/GradientText";
import { Button } from "@/components/ui/button";
import GuidWrp from "../wrapper/GuidWrp";

const MazeAlgGuid = () => {
  return (
    <GuidWrp>
      <p className="text-3xl font-semibold text-blue-300 mb-4 subpixel-antialiased">
        Maze Generation Algorithm
      </p>

      <div className="flex items-center text-left">
        <MazeAlgExample />
        <p className="text-lg text-gray-200">
          Quickly generate different mazes with this
          <span className="text-blue-400"> "Quick Maze" </span>button.
        </p>
      </div>

      <p className="text-xl text-gray-200 mt-5">
        Select a{" "}
        <span className="text-blue-400"> maze-generating algorithm </span> and
        press 'Generate Maze' to
        <span className="text-blue-400"> visualize </span>
        the maze creation.
      </p>
    </GuidWrp>
  );
};

export default MazeAlgGuid;

const MazeAlgExample = () => {
  return (
    <div className="flex flex-col md:gap-3 lg:gap-5 max-w-full px-5 py-6">
      <GradientText className="text-center">Maze Algorithm</GradientText>
      <div className="flex gap-5">
        <OptionSelect
          placeHolder={"Maze Algorithm"}
          selectItems={mazeGenAlg}
          Fn={() => {}}
          className="max-w-full"
        />
        <Button>Quick Maze</Button>
      </div>

      <Button variant={"blue"}>Generate Maze</Button>
    </div>
  );
};

const mazeGenAlg = [{ value: "btm", label: "Binary Tree Maze (BTM)" }];
