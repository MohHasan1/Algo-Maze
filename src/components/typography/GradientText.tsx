import { FC } from "react";

const GradientText: FC<GradientTextProps> = ({ children, className = "" }) => (
  <p
    className={`pointer-events-none whitespace-pre-wrap bg-clip-text text-3xl font-medium text-transparent bg-gradient-to-b to-gray-400 from-blue-500/40 ${className}`}
  >
    {children}
  </p>
);

export default GradientText;

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};
