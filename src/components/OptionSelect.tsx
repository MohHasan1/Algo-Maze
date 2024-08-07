import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

const OptionSelect: FC<Props> = ({ defaultVal, placeHolder, selectItems, disabled,  Fn }) => {
  const handleOptionChange = (value: string) => {
    Fn(value);
    console.log(value);
  };

  return (
    <>
      <Select onValueChange={handleOptionChange} defaultValue={defaultVal} disabled={disabled}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          {selectItems.map((item) => (
            <SelectItem className="p-2" value={item.value}>{item.label}</SelectItem>
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
  defaultVal?:string;
  placeHolder: string;
  selectItems: selectItem[];
  disabled?:boolean;
  Fn: (...arg: any) => void;
};
