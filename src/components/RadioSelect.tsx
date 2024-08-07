import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { type FC } from "react";

const RadioSelect: FC<Props> = ({
  initialVal,
  options,
  disabled = false,
  setFn,
}) => {
  const handleRadioChange = (value: string) => {
    setFn(value);
  };

  return (
    <>
      <RadioGroup
        disabled={disabled}
        defaultValue={initialVal}
        onValueChange={handleRadioChange}
        className="flex"
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
};

export default RadioSelect;

type RadioProps = {
  value: string;
  label: string;
};
type Props = {
  initialVal: string;
  options: RadioProps[];
  disabled?: boolean;
  setFn: (...arg: any) => void;
};
