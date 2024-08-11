import GridSizeOpt from "./GridSizeBar";
import MazeGenOpt from "./MazeAlgoBar";
import MazeSolvingAlgOpt from "./SearchAlgoBar";
import ResetGrid from "./MazeAndGridBar";

const GridNavBar = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <GridSizeOpt />
        <MazeGenOpt />
        <MazeSolvingAlgOpt />
        <ResetGrid />
      </section>
    </>
  );
};

export default GridNavBar;
