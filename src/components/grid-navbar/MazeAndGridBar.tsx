import useStore from "@/store/store";
import { Button } from "../ui/button";
import GradientText from "../typography/GradientText";

import { useToast } from "../Toast";
import { stopSearch } from "@/algorithms/search/searchState";
import { logInfo } from "@/utils/log";

const MazeAndGridBar = () => {
  const isGridMaze = useStore((state) => state.isGridMaze);
  const isMazeClean = useStore((state) => state.isMazeClean);
  const isMazeAlgProgress = useStore((state) => state.isMazeAlgProgress);
  const isSearchAlgProgress = useStore((state) => state.isSearchAlgProgress);

  const clearGrid = useStore((state) => state.clearGrid);
  const resetMaze = useStore((state) => state.resetMaze);

  const { infoToast } = useToast();

  function handleReset() {
    // If no maze, nothing to reset
    if (!isGridMaze) {
      infoToast("There is no maze to reset.", "reset-no-maze");
      return;
    } else if (isGridMaze && isMazeClean) {
      infoToast("The maze is clean.", "reset-maze");
      return;
    } else {
      // stop the search alg
      logInfo("stopping search")
      stopSearch();
      // Then reset the maze (clean maze)
      logInfo("reseting maze")
      resetMaze();
    }
  }

  function handleClearGrid() {
    // If the Grid is not maze:
    if (!isGridMaze) {
      infoToast("The grid is already clean.", "clean-grid");
      return;
    }
    clearGrid();
  }

  return (
    <div className="flex flex-col  md:gap-2 lg:gap-4">
      <GradientText>Grid and Maze Controls</GradientText>

      <Button
        disabled={isMazeAlgProgress}
        variant={"destructive"}
        onClick={handleReset}
        size={"sm"}
      >
        Reset Maze
      </Button>

      <Button
        disabled={isMazeAlgProgress || isSearchAlgProgress}
        variant={"destructive"}
        onClick={handleClearGrid}
        size={"sm"}
      >
        Clear Grid
      </Button>
    </div>
  );
};

export default MazeAndGridBar;
