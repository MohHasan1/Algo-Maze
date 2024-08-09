import { StateCreator } from "zustand";

type State = {
  mazeV: number;
  mazeSolveV: number;
};
type Action = {
  setMazeV: (speed: number) => void;
  setMazeSolveV: (speed: number) => void;
};

export type SpeedSliceType = State & Action;

const createSpeedSlice: StateCreator<State & Action> = (set) => ({
  mazeV: 100,
  mazeSolveV: 32.5,

  setMazeV: (speed: number) => {
    set({ mazeV: speed });
  },
  setMazeSolveV: (speed: number) => {
    set({ mazeSolveV: speed });
  },
});

export default createSpeedSlice;
