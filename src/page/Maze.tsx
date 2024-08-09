import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import TopBar from "@/components/layout/TopBar";

const Maze = () => {
  return (
    <>
      <section className="h-screen xl:overflow-hidden">
        <TopBar />
        <Main />
        <Footer />
      </section>
    </>
  );
};

export default Maze;
