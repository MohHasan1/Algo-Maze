import Alert from "./components/Alert";
import PageTransition from "./components/PageTransition";
import { ToastContainerWrapper } from "./components/Toast";
import { LOCAL_STORAGE } from "./constants/constant";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Guid from "./page/Guid";
import Intro from "./page/Intro";
import Maze from "./page/Maze";
import ScreenNotSupported from "./page/ScreenNotSupported";

function App() {
  const isIntroShown = sessionStorage.getItem(LOCAL_STORAGE.IS_INTRO_SHOWN);
  // const { storedValue, setLSValue, deleteLSValue } = useLocalStorage(
  //   LOCAL_STORAGE.IS_INTRO_SHOWN
  // );

  const page = (
    <>
      <div className="hidden md:block">
        <Maze />
      </div>
      <div className="block md:hidden">
        <ScreenNotSupported />
      </div>

      <ToastContainerWrapper />
    </>
  );

  if (isIntroShown === null) {
    sessionStorage.setItem(LOCAL_STORAGE.IS_INTRO_SHOWN, "true");
    return (
      <>
        <PageTransition page1={<Intro />} page2={page} />
      </>
    );
  } else {
    return page;
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
