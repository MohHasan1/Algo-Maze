import Guid from "@/page/Guid";
import AnimatedGridBg from "../background/AnimatedGridBg";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import Alert from "../Alert";

import AnimatedGradientTxt from "../typography/AnimatedGradientText";
import { CircleHelp } from "lucide-react";

const TopBar = () => {
  return (
    <header className="relative h-14 flex justify-between items-center p-4 gap-4">
      <AnimatedGridBg />

      <AnimatedShinyText className="text-[#87CEFA]/85 cursor-default text-4xl font-medium ">
        Algo-Lab
      </AnimatedShinyText>

      <Alert label={<AlertLabel />}>
        <Guid />
      </Alert>
    </header>
  );
};

export default TopBar;

const AlertLabel = () => {
  return (
    <AnimatedGradientTxt
      icon={<CircleHelp size={20} color="#5dcef4" strokeWidth={1.75} />}
      className="inline animate-gradient bg-gradient-to-r from-[#00aaff]  via-[#265d77] to-[#00aaff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
    >
      <p className="text-md">Quick Guide</p>
    </AnimatedGradientTxt>
  );
};
