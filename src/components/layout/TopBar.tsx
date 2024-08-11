import AnimatedGridBg from "../background/AnimatedGridBg";
import AnimatedShinyText from "../magicui/animated-shiny-text";

const TopBar = () => {
  return (
    <header className="relative min-h-14 flex justify-start items-center p-4 gap-4">
      <AnimatedGridBg />

      <AnimatedShinyText className="text-[#87CEFA]/85 cursor-default text-4xl font-medium ">
        Algo-Lab
      </AnimatedShinyText>
    </header>
  );
};

export default TopBar;

{
  /* <p className="pointer-events-none whitespace-pre-wrap bg-clip-text text-transparent text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-gray-300/80 dark:from-gray-300/80 dark:to-blue-900/50">
Algo-Lab
</p> */
}
