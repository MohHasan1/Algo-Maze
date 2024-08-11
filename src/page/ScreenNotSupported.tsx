import AnimatedGridBg from "@/components/background/AnimatedGridBg";
import BlurIn from "@/components/magicui/blur-in";

const ScreenNotSupported = () => {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden p-6 md:p-20 border border-blue-300 shadow-xl">
      <AnimatedGridBg />
      <div className="relative z-10 text-center">
        <BlurIn>
          <p className="text-lg md:text-2xl font-semibold mb-4 text-blue-600">
            Sorry, this screen size is not supported.
          </p>
        </BlurIn>
        <BlurIn>
          <p className="text-md md:text-lg text-blue-400">
            Please rotate your screen or use a larger display.
          </p>
        </BlurIn>
      </div>
    </main>
  );
};

export default ScreenNotSupported;
