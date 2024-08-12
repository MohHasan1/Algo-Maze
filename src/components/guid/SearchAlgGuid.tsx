import OptionSelect from "@/components/select/OptionSelect";
import GradientText from "@/components/typography/GradientText";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import GuidWrp from "../wrapper/GuidWrp";

const SearchAlgGuid = () => {
  return (
    <>
      <GuidWrp>
        <p className="text-3xl font-semibold text-blue-300 mb-4 subpixel-antialiased">
          Choosing a Search Algorithm
        </p>

        <div className="flex items-center space-x-4">
          <SearchAlgoExample />

          <div className="mt-14 md:text-sm lg:text-lg text-left">
            <p className=" text-gray-200">
              This <span className="text-blue-400">slider</span> is to set the{" "}
              Search algorithms{" "}
              <span className="text-blue-400">visualization speed</span> 🚀.
              Slide it to the right ➡️, to increase the speed, and to the left
              ⬅️ to slow down 🐢.
            </p>

            <p className="text-gray-200 mt-4">
              Note that you{" "}
              <span className="text-blue-400">
                cannot change the speed when the visualization starts.
              </span>{" "}
              (To change the speed when the visualization is on, press{" "}
              <span className="text-blue-400">reset</span> 🔄 and adjust the
              speed.)
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-200 text-center mt-5">
          Select a <span className="text-blue-400">Search algorithm</span> you
          want to explore 🔍 and press{" "}
          <span className="text-blue-400">"Search Maze"</span> to start the{" "}
          <span className="text-blue-400">visualization</span> 🚀.
        </p>
      </GuidWrp>
    </>
  );
};

export default SearchAlgGuid;

const SearchAlgoExample = () => {
  return (
    <div className="flex flex-col md:gap-3 lg:gap-5 md:min-w-72 xl:min-w-96 p-4">
      <GradientText className="text-center">Search Algorithm</GradientText>
      <Slider defaultValue={[200 - 33.5]} max={200} step={33.5} />
      <OptionSelect
        placeHolder={"Search Algorithm"}
        selectItems={mazeSolvingAlg}
        Fn={() => {}}
        className="w-full"
      />
      <Button variant={"blue"} onClick={() => {}}>
        Search Maze
      </Button>
    </div>
  );
};

const mazeSolvingAlg = [
  { value: "bfs", label: "Breadth-First Search (BFS)" },
  { value: "dfs", label: "Deep-First Search (DFS)" },
];
