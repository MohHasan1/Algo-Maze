import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <TopBar />

        <Main />

        <Footer />
      </section>
    </>
  );
}

export default App;
