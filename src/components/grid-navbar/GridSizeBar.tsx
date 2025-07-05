import useStore from "@/store/store";
import RadioSelect from "../select/RadioSelect";
import GradientText from "../typography/GradientText";

const GridSizeBar = () => {
  const isMazeAlgProgress = useStore((state) => state.isMazeAlgProgress);
  const isSearchAlgProgress = useStore((state) => state.isSearchAlgProgress);

  const setGridSize = useStore((state) => state.setGridSize);

  return (
    <div className="hidden md:flex flex-col gap-2 md:gap-3 lg:gap-5">
      <GradientText>Grid Dimension</GradientText>

      <RadioSelect
        initialVal="sm"
        options={OPTIONS}
        setFn={setGridSize}
        disabled={isMazeAlgProgress || isSearchAlgProgress}
      />
    </div>
  );
};

export default GridSizeBar;

const OPTIONS = [
  { value: "sm", label: "SMALL", id: "s" },
  { value: "md", label: "MEDIUM", id: "m" },
  { value: "lg", label: "LARGE", id: "l" },
];
