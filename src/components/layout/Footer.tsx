import { Github, Linkedin } from "lucide-react";
import ShimmerButton from "../magicui/shimmer-button";
import AnimatedGridBg from "../AnimatedGridBg";

// <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
const Footer = () => {
  return (
    <footer className="relative min-h-6 overflow-hidden">
      <AnimatedGridBg />

      <section className="min-h-14 p-5 flex justify-end items-center gap-5">
        <a
          href="https://linkedin.com/in/mohammed-hasan-41444b268"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShimmerButton
            shimmerColor="rgb(59 130 246 / var(--tw-text-opacity)) /* #3b82f6 */"
            shimmerDuration="2.5s"
            borderRadius="20px"
            background="hsl(var(--background))"
            className="shadow-2xl"
          >
            <Linkedin color="rgb(59 130 246 / var(--tw-text-opacity)) /* #3b82f6 */" />
          </ShimmerButton>
        </a>
        <a
          href="https://github.com/MohHasan1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShimmerButton
            shimmerColor="rgb(168 85 247 / var(--tw-text-opacity)) /* #a855f7 */"
            shimmerDuration="2.5s"
            borderRadius="20px"
            background="hsl(var(--background))"
            className="shadow-2xl "
          >
            <Github color="rgb(147 51 234 / var(--tw-text-opacity)) /* #9333ea */" />
          </ShimmerButton>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
