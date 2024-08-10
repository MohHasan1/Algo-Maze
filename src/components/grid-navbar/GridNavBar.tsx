import GridSizeOpt from "./GridSize";
import MazeGenOpt from "./MazeAlgo";
import MazeSolvingAlgOpt from "./SearchAlgo";
import ResetGrid from "./Helper";

const GridNavBar = () => {
  return (
    <>
      <section className="flex flex-col gap-6">
        <GridSizeOpt />
        <MazeGenOpt />
        <MazeSolvingAlgOpt />
        <ResetGrid />
      </section>
    </>
  );
};

export default GridNavBar;
