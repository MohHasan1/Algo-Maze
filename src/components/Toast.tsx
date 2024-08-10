import { Ban, BookOpenCheck, TriangleAlert } from "lucide-react";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToast = () => {
  const infoToast = (message: string, toastId: string) => {
    toast.info(message, {
      toastId: toastId,
      icon: <BookOpenCheck color="#3b82f6" />,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
      transition: Flip,
      progressClassName: "bg-blue-600",
    });
  };
  const warnToast = (message: string, toastId: string) => {
    toast.warn(message, {
      toastId: toastId,
      icon: <TriangleAlert color="#ca8a04" />,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
      transition: Flip,
      progressClassName: "bg-yellow-600",
    });
  };
  const errorToast = (message: string, toastId: string) => {
    toast.error(message, {
      toastId: toastId,
      icon: <Ban color="#b91c1c" />,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
      transition: Flip,
      progressClassName: "bg-red-700",
    });
  };

  return { infoToast, errorToast, warnToast };
};

export function ToastContainerWrapper() {
  return (
    <ToastContainer
      limit={3}
      toastClassName={"bg-background"}
      autoClose={6000}
    />
  );
}
