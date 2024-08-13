import AnimatedGridBg from "@/components/background/AnimatedGridBg";
import FlipText from "@/components/magicui/flip-text";
import SparklesText from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Intro = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [showSparkles, setShowSparkles] = useState<boolean>(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowSparkles(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const textClasses = cn(
    "transition-colors duration-500",
    animate && "text-[#87CEFA]/75",
    "text-7xl font-bold "
  );

  return (
    <main className="relative flex h-dvh w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <AnimatedGridBg />
      <div className="cursor-default z-10  text-center text-5xl font-medium ">
        <p> Welcome to </p>
        <span>
          {!showSparkles ? (
            <FlipText className={textClasses} word="Algo-Lab" />
          ) : (
            <SparklesText className={textClasses} text="Algo-Lab" />
          )}
        </span>
      </div>
    </main>
  );
};

export default Intro;
