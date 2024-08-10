import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FC } from "react";

const OptionSelect: FC<Props> = ({
  className,
  defaultVal,
  placeHolder,
  selectItems,
  disabled,
  Fn,
}) => {
  const handleOptionChange = (value: string) => {
    Fn(value);
  };

  return (
    <>
      <Select
        onValueChange={handleOptionChange}
        defaultValue={defaultVal}
        disabled={disabled}
      >
        <SelectTrigger className={cn("w-[180px]", className)}>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>

        <SelectContent>
          {selectItems.map((item) => (
            <SelectItem key={item.value} className="p-2" value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default OptionSelect;

type selectItem = {
  value: string;
  label: string;
};
type Props = {
  className?: string;
  defaultVal?: string;
  placeHolder: string;
  selectItems: selectItem[];
  disabled?: boolean;
  Fn: (...arg: any) => void;
};
