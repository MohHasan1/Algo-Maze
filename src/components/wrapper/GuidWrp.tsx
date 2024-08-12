import { FC, ReactNode } from "react";
import { Card, CardContent } from "../ui/card";

const GuidWrp: FC<Props> = ({ children }) => {
  return (
    <>
      <Card className="w-full shadow-lg rounded-lg overflow-hidden h-[30rem] flex justify-center items-center border border-blue-300">
        <CardContent className="flex flex-col items-center justify-center p-6">
          {children}
        </CardContent>
      </Card>
    </>
  );
};

type Props = {
  children: ReactNode;
};
export default GuidWrp;
