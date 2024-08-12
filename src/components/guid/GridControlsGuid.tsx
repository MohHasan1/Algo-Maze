import GradientText from "@/components/typography/GradientText";
import { Button } from "@/components/ui/button";
import GuidWrp from "../wrapper/GuidWrp";

const GridControlsGuid = () => {
  return (
    <>
      <GuidWrp>
        <p className="text-3xl font-semibold text-blue-300 mb-4 subpixel-antialiased">
          Clearing and Reseting Maze
        </p>

        <div className="flex items-center text-left">
          <GridControlExample />
          <div className="mt-14 md:text-sm lg:text-lg ">
            <p className="text-lg text-gray-200">
              <span className="text-blue-400">"Reset Maze"</span> is used to
              clear the maze if there are any paths or explored nodes.
            </p>

            <p className="text-lg text-gray-200 mt-5">
              <span className="text-blue-400">"Clear Grid"</span> clears the
              maze and removes it completely.
            </p>
          </div>
        </div>
      </GuidWrp>
    </>
  );
};

export default GridControlsGuid;

const GridControlExample = () => {
  return (
    <div className="flex flex-col md:gap-3 lg:gap-5 md:min-w-72 xl:min-w-96 p-4">
      <GradientText className="text-center">
        Grid and Maze Controls
      </GradientText>

      <Button variant={"destructive"}>Reset Maze</Button>

      <Button variant={"destructive"}>Clear Grid</Button>
    </div>
  );
};
