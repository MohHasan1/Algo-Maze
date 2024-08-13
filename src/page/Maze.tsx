import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import TopBar from "@/components/layout/TopBar";

const Maze = () => {
  return (
    <>
      <section className="xl:overflow-hidden flex flex-col h-dvh">
        <TopBar />
        <Main />
        <Footer />
      </section>
    </>
  );
};

export default Maze;
