import AnimatedGridBg from "../AnimatedGridBg";

const TopBar = () => {
  return (
    <header className="relative min-h-14 flex justify-start items-center p-4 gap-4">
      <AnimatedGridBg />
      <p className="pointer-events-none whitespace-pre-wrap bg-clip-text text-transparent text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-gray-300/80 dark:from-gray-300/80 dark:to-blue-900">
        Algo-Lab
      </p>
      {/* <img src="/vite.svg" alt="" className="size-16"/> */}
    </header>
  );
};

export default TopBar;
