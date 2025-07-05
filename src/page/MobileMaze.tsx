import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import TopBar from "@/components/layout/TopBar";

const MobileMaze = () => {
  return (
    <main className="flex flex-col h-dvh">
      <TopBar />
      <Main />
      <Footer />
    </main>
  );
};

export default MobileMaze;
