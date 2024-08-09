import { create } from "zustand";
import createGridSlice, { GridSliceType } from "./Slices/GridSlice";
import createAlgoSlice, { AlgoSliceType } from "./Slices/AlgoSlice";
import createSpeedSlice, { SpeedSliceType } from "./Slices/SpeedSlice";


// if u r using a fun too set a variable, and u use this var to set another variables, it may cause issue, so we use a initialze function.
const useStore = create<GridSliceType & SpeedSliceType & AlgoSliceType>()(
  (...a) => ({
    ...createGridSlice(...a),
    ...createSpeedSlice(...a),
    ...createAlgoSlice(...a),
  })
);
export default useStore;
