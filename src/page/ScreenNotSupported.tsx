import AnimatedGridBg from "@/components/background/AnimatedGridBg";
import BlurIn from "@/components/magicui/blur-in";

const ScreenNotSupported = () => {
  return (
    <main className="relative flex h-dvh w-dvw items-center justify-center overflow-hidden p-6 md:p-20 border border-blue-300 shadow-xl">
      <AnimatedGridBg />
      <div className="relative z-10 text-center">
        <BlurIn>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-500">
            Sorry, this screen size is not supported.
          </p>
        </BlurIn>
        <BlurIn>
          <div className="p-4">
            <p className="text-md md:text-lg text-blue-600 font-semibold">
              Please rotate your device.
            </p>

            <p className="text-md md:text-lg text-blue-500 mt-2">
              If this view is still not supported, kindly switch to a larger
              display.
            </p>

            <p className="text-sm text-blue-400 mt-4 italic">
              Small devices are not suitable for this application due to the
              congested layout, so I decided not to include support for them.
            </p>
          </div>
        </BlurIn>
      </div>
    </main>
  );
};

export default ScreenNotSupported;
