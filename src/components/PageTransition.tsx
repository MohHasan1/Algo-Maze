import { useState, useEffect, type ReactNode, type FC } from "react";
import { Button } from "./ui/button";

const PageTransition: FC<PT_Props> = ({
  page1,
  page2,
  transitionTime = 8500,
}) => {
  // To conditionally render between page1 and page 2 //
  const [showPage1, setShowPage1] = useState(true);
  // To set the transition to true when we want to transit //
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTransitioning(true);
    }, transitionTime - 100);

    const timer2 = setTimeout(() => {
      setShowPage1(false);
    }, transitionTime);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Show page 1 when transition is true. */}
      <main
        className={`transition-opacity duration-1000 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {showPage1 && page1}
      </main>

      {/* Remove page 2 when showPage1 is false */}
      <main
        className={`transition-opacity duration-1000 ${
          transitioning && !showPage1 ? "opacity-100" : "opacity-0"
        }`}
      >
        {!showPage1 && page2}
      </main>
    </>
  );
};

export default PageTransition;

type PT_Props = {
  page1: ReactNode;
  page2: ReactNode;
  transitionTime?: number;
};
