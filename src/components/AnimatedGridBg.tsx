import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";

const AnimatedGridBg = () => {
  return (
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={10}
      repeatDelay={2}
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-3",
        "stroke-blue-400/20"
      )}
    />
  );
};

export default AnimatedGridBg;
