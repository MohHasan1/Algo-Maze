import useStore from "@/store/store";
import { Button } from "../ui/button";
import GradientText from "../typography/GradientText";

const ResetGrid = () => {
  const reset = useStore((state) => state.reset);

  return (
    <div className="flex flex-col gap-5">
      <GradientText>Maze Reset</GradientText>

      <Button variant={"destructive"} onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default ResetGrid;
