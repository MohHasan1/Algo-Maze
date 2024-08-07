import GridNavBar from "../grid-navbar/GridNavBar";

import ViewGrid from "../ViewGrid";
import ShineBorderWrp from "../wrapper/ShineBorderWrp";

const Main = () => {
  return (
    // <div className="flex-1 flex overflow-hidden">

    <ShineBorderWrp className=" overflow-hidden h-[85%] w-full flex justify-around items-center rounded-lg border bg-background md:shadow-xl">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-0">
        <ViewGrid />

        <nav className=" min-w-80">
          <GridNavBar />
        </nav>
      </div>
    </ShineBorderWrp>
    // </div>
  );
};

export default Main;
