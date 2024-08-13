import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FC, ReactNode, useEffect, useState } from "react";
import AnimatedGridBg from "./background/AnimatedGridBg";
import { SCREEN_SIZE } from "@/constants/constant";

const Alert: FC<AlertProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${SCREEN_SIZE.md})`);

    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>{label}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-screen md:h-[84dvh] lg:h-[88dvh] overflow-hidden flex flex-col items-center justify-center">
        <AnimatedGridBg className="h-screen" />
        <AlertDialogTitle hidden={true}>User Onboarding Guide</AlertDialogTitle>
        <AlertDialogHeader>{children}</AlertDialogHeader>
        <AlertDialogDescription hidden={true}></AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Close User Guide</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type AlertProps = {
  label: ReactNode | string;
  children: ReactNode;
};

export default Alert;
