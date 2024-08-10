import GridNavBar from "../grid-navbar/GridNavBar";

import ViewGrid from "../ViewGrid";
import ShineBorderWrp from "../wrapper/ShineBorderWrp";

const Main = () => {
  return (
    <>
      <ShineBorderWrp className="overflow-hidden h-[85%] w-full flex justify-around items-center rounded-lg border bg-background md:shadow-xl">
        <div className="flex md:flex-row md:gap-0 justify-evenly items-center">
          <div className="w-[40%] flex justify-center">
            <ViewGrid />
          </div>

          <nav className="hidden xl:block md:overflow-auto md:h-full md:max-h-[calc(85vh-40px)]">
            <div className="min-w-80">
              <GridNavBar />
            </div>
          </nav>
        </div>
      </ShineBorderWrp>
    </>
  );
};

export default Main;
