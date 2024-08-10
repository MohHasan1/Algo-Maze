import { resolve } from "path";
import PageTransition from "./components/PageTransition";
import { Button } from "./components/ui/button";
import { LOCAL_STORAGE } from "./constants/constant";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Intro from "./page/Intro";
import Maze from "./page/Maze";
import { logInfo } from "./utils/log";

function App() {
  // const {storedValue, setLSValue} = useLocalStorage(LOCAL_STORAGE.IS_INTRO_SHOWN)
  const isIntroShown = sessionStorage.getItem(LOCAL_STORAGE.IS_INTRO_SHOWN);
  if (isIntroShown === null) {
    sessionStorage.setItem(LOCAL_STORAGE.IS_INTRO_SHOWN, "true");
    return (
      <>
        <PageTransition page1={<Intro />} page2={<Maze />} />
      </>
    );
  } else {
    return <Maze />;
  }

  // let flag = false; (does not work - why understand it)
  // async function r(index: number) {
  //   logInfo(flag);

  //   if (flag) {
  //     return;
  //   }

  //   let i = index + 1;

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   r(i);

  //   return "done"
  // }

  // async function r(index: number): Promise<string> {
  //   console.log(`Index: ${index}, Flag: ${flag}`);

  //   // Check if flag is set
  //   if (flag) {
  //     return "cancelled";
  //   }

  //   let i = index + 1;

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   // Recursive call
  //   const result = await r(i);

  //   // Return 'done' only if not cancelled
  //   return flag ? "cancelled" : result;
  // }
  
  // async function as(index: number) {
  //   return new Promise((resolve) => {
  //     console.log(`Index: ${index}, Flag: ${flag}`);

  //     if (flag) {
  //       resolve("done")
  //       return;
  //     }

  //     let i = index + 1;

  //     setTimeout(() => as(i).then(resolve), 1000);
  //   });
  // }

  // function cancelR() {
  //   flag = true;
  // }

  // async function runFn() {
  //   // const res1 = await r(0);
  //   // logInfo(res1);

  //   const res = await as(0);
  //   console.log(res);
  // }

  // return (
  //   <div>
  //     <Button onClick={runFn}>start</Button>
  //     <Button onClick={cancelR}>cancel</Button>
  //   </div>
  // );
}

export default App;
