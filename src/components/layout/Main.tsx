import GridNavBar from "../grid-navbar/GridNavBar";
// import MiniGridNavBar from "../grid-navbar/MiniGridNavBar";

import ViewGrid from "../ViewGrid";
import ShineBorderWrp from "../wrapper/ShineBorderWrp";

const Main = () => {
  return (
    <>
      <ShineBorderWrp className="overflow-hidden h-[calc(100vh-10.11rem)] w-full flex justify-around items-center rounded-lg border bg-background md:shadow-xl">
        <section className="flex flex-col md:flex-row justify-evenly items-center">
          
          <div className="w-[40%] flex justify-center">
            <ViewGrid />
          </div>

          {/* <nav className="hidden sm:block md:hidden">
            <MiniGridNavBar />
          </nav> */}

          <nav className="hidden md:block md:overflow-auto md:h-full md:max-h-[calc(85vh-40px)] min-w-80">
            <GridNavBar />
          </nav>

        </section>
      </ShineBorderWrp>
    </>
  );
};

export default Main;
