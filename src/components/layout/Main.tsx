import GridNavBar from "../grid-navbar/GridNavBar";
import ViewGrid from "../ViewGrid";
import ShineBorderWrp from "../wrapper/ShineBorderWrp";

const Main = () => {
  return (
    <>
      <ShineBorderWrp className="overflow-hidden flex-1 w-full flex justify-around items-center rounded-lg border bg-background shadow-xl">
        <section className="flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly items-center w-full">
          <ViewGrid />
          <GridNavBar />
        </section>
      </ShineBorderWrp>
    </>
  );
};

export default Main;
