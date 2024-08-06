import ShineBorder from "../magicui/shine-border";
import ViewGrid from "../ViewGrid";

const Main = () => {
  return (

      <ShineBorder
        className="h-[85%] w-full flex justify-around items-center rounded-lg border bg-background md:shadow-xl"
        color={["#191970", "#4169E1", "#708090", "#4682B4", "#5F9EA0", "#87CEEB"]}
        >
        <section className="absolute">
          <ViewGrid />
        </section>
        <nav className="bg-blue-900 min-w-80"> </nav>
      </ShineBorder>

  );
};

export default Main;
