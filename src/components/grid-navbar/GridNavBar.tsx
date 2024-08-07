import GridSizeOpt from "./GridSizeOpt";
import MazeGenOpt from "./MazeGenOpt";
import MazeSolvingAlgOpt from "./MazeSolvingAlgOpt";
import ResetGrid from "./ResetGrid";

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
