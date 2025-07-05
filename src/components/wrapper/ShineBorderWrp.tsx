import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import ShineBorder from "../magicui/shine-border";

/**
 * @description Uses Magic Ui library, we need to set up magic ui and get the ShineBorder
 */

const ShineBorderWrp: FC<Props> = ({
  children,
  className,
  colors,
  borderRadius = 8,
}) => {
  return (
    <ShineBorder
      className={cn(className)}
      borderRadius={borderRadius}
      color={
        colors || [
          "#191970",
          "#4169E1",
          "#708090",
          "#4682B4",
          "#5F9EA0",
          "#87CEEB",
        ]
      }
    >
      {/* <div className="absolute size-full overflow-y-auto flex justify-center items-center py-10">
        {children}
      </div> */}
      <div className="absolute flex justify-center items-center size-full overflow-y-auto">
        <div className="flex justify-center items-center py-10 w-full" >
          {children}
        </div>
      </div>
    </ShineBorder>
  );
};

export default ShineBorderWrp;

type Props = {
  children: ReactNode;
  className?: string;
  colors?: Array<string>;
  borderRadius?: number;
};
