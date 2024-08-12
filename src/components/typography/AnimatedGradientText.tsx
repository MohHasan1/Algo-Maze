/**
 *
 * @Imp uses magic ui AnimatedGradientText
 */

import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { FC, ReactNode } from "react";

const AnimatedGradientTxt: FC<Props> = ({ className, children, icon }) => {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        {icon} <hr className="mx-2 h-4 w-[1px] shrink-0 bg-blue-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#40b6ff] via-[#9c40ff] to-[#18c5e3] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            className
          )}
        >
          {children}
        </span>
      </AnimatedGradientText>
    </div>
  );
};

type Props = { children: ReactNode; className?: string; icon?: ReactNode };
export default AnimatedGradientTxt;
