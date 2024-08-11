import MazeAlgoBar from "./MazeAlgoBar";
import SearchAlgoBar from "./SearchAlgoBar";
import MazeAndGridBar from "./MazeAndGridBar";

const MiniGridNavBar = () => {
  return (
    <section className="flex flex-row ">
      <MazeAlgoBar />
      <SearchAlgoBar />
      <MazeAndGridBar />
    </section>
  );
};

export default MiniGridNavBar;
