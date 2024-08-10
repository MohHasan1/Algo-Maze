import useStore from "@/store/store";
import { Button } from "../ui/button";
import GradientText from "../typography/GradientText";
import { stopSearch } from "@/algorithms/search/share";
import { useToast } from "../Toast";

const ResetGrid = () => {
  const inProgress = useStore((state) => state.inProgress);
  const isGridMaze = useStore((state) => state.isGridMaze);
  const clearGrid = useStore((state) => state.clearGrid);
  const resetMaze = useStore((state) => state.resetMaze);
  const { infoToast } = useToast();

  function handleReset() {
    // If no maze, nothing to clean
    if (!isGridMaze) {
      infoToast("There is no maze to reset.", "reset-grid");
      return;
    }
    // stop the search alg
    stopSearch();
    // Then reset the maze (clean maze)
    resetMaze();
  }

  function handleClearGrid() {
    if (!isGridMaze) {
      infoToast("The grid is already clean.", "clean-grid");
      return;
    }
    clearGrid();
  }

  return (
    <div className="flex flex-col gap-5">
      <GradientText>Maze Reset</GradientText>

      <Button variant={"destructive"} onClick={handleReset}>
        Reset
      </Button>

      <Button
        disabled={inProgress}
        variant={"destructive"}
        onClick={handleClearGrid}
      >
        Clear Grid
      </Button>
    </div>
  );
};

export default ResetGrid;
