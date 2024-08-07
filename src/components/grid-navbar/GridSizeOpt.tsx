import useStore from "@/store/store";
import RadioSelect from "../RadioSelect";
import GradientText from "../typography/GradientText";

const GridSizeOpt = () => {
  const setGridSize = useStore((state) => state.setGridSize);
  const inProgress = useStore((state) => state.inProgress);

  return (
    <div className="flex flex-col gap-5">
      <GradientText>Maze Size</GradientText>

      <RadioSelect
        initialVal="sm"
        options={OPTIONS}
        setFn={setGridSize}
        disabled={inProgress}
      />
    </div>
  );
};

export default GridSizeOpt;

const OPTIONS = [
  { value: "sm", label: "SMALL", id: "s" },
  { value: "md", label: "MEDIUM", id: "m" },
  { value: "lg", label: "LARGE", id: "l" },
];
