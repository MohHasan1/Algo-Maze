import GridNavBar from "../grid-navbar/GridNavBar";
import ViewGrid from "../ViewGrid";
import ShineBorderWrp from "../wrapper/ShineBorderWrp";

const Main = () => {
  return (
    <>
      <ShineBorderWrp className="overflow-hidden flex-1 w-full flex justify-around items-center rounded-lg border bg-background shadow-xl">
        <section className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="w-[40%] flex justify-center">
            <ViewGrid />
          </div>

          <nav className="hidden md:block md:overflow-auto md:h-full md:max-h-[calc(85vh-40px)] min-w-80">
            <GridNavBar />
          </nav>
        </section>
      </ShineBorderWrp>
    </>
  );
};

export default Main;
