import PageTransition from "./components/PageTransition";
import { LOCAL_STORAGE } from "./constants";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Intro from "./page/Intro";
import Maze from "./page/Maze";

function App() {
  const {storedValue, setLSValue} = useLocalStorage(LOCAL_STORAGE.IS_INTRO_SHOWN)

  if (storedValue === null) {
    setLSValue(true);
    return <PageTransition page1={<Intro />} page2={<Maze />} />;
  } else {
    return <Maze />;
  }
}

export default App;
