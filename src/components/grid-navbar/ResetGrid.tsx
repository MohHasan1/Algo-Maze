import useStore from "@/store/store";
import { Button } from "../ui/button";
import GradientText from "../typography/GradientText";

const ResetGrid = () => {
  const clearGrid = useStore((state) => state.clear);
  const resetGrid = useStore((state) => state.reset);
  const inProgress = useStore((state) => state.inProgress);

  return (
    <div className="flex flex-col gap-5">
      <GradientText>Maze Reset</GradientText>

      <Button disabled={inProgress} variant={"destructive"} onClick={resetGrid}>
        Reset
      </Button>

      <Button disabled={inProgress} variant={"destructive"} onClick={clearGrid}>
        Clear Grid
      </Button>
    </div>
  );
};

export default ResetGrid;
