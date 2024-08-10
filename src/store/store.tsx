import { create } from "zustand";
import createGridSlice, { GridSliceType } from "./Slices/GridSlice";
import createAlgoSlice, { AlgoSliceType } from "./Slices/AlgoSlice";
import createSpeedSlice, { SpeedSliceType } from "./Slices/SpeedSlice";
import createMazeSlice, { MazeSliceType } from "./Slices/MazeSlice";

type CombinedStoreType = GridSliceType & SpeedSliceType & AlgoSliceType & MazeSliceType;

const useStore = create<CombinedStoreType>()(
  (...a) => ({
    ...createGridSlice(...a),
    ...createMazeSlice(...a), // Make sure MazeSlice is correctly combined
    ...createAlgoSlice(...a),
    ...createSpeedSlice(...a),
  })
);

export default useStore;
