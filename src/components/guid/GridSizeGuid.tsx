
import RadioSelect from "@/components/select/RadioSelect";
import GradientText from "@/components/typography/GradientText";
import GuidWrp from "../wrapper/GuidWrp";

const GridSizeGuid = () => {
  return (
    <>
      <GuidWrp>
        <p className="text-3xl font-semibold text-blue-300 mb-4">
          Changing Grid Dimension
        </p>

        <GridSizeExmaple />

        <p className="text-xl text-gray-200 text-center mt-5">
          There are <span className="text-blue-400">three grid sizes </span>{" "}
          available. Select one by{" "}
          <span className="text-blue-400"> clicking a radio button</span> 🎯 to
          dynamically
          <span className="text-blue-400">
            {" "}
            adjust the grid or maze size 🧩
          </span>{" "}
          and explore different{" "}
          <span className="text-blue-400">
            dimensions and maze complexities 🌐
          </span>
          .
        </p>
      </GuidWrp>
    </>
  );
};

export default GridSizeGuid;

const GridSizeExmaple = () => {
  return (
    <div className="flex flex-col md:gap-3 lg:gap-5 md:min-w-72 xl:min-w-96 p-4">
      <GradientText className="text-center">Grid Dimension</GradientText>
      <RadioSelect initialVal="sm" options={OPTIONS} setFn={() => {}} />
    </div>
  );
};

const OPTIONS = [
  { value: "sm", label: "SMALL", id: "s" },
  { value: "md", label: "MEDIUM", id: "m" },
  { value: "lg", label: "LARGE", id: "l" },
];
