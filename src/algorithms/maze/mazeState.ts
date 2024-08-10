import { logInfo } from "@/utils/log";

let mazeGenFlag: boolean = true;
let mazetimers: NodeJS.Timeout[] = [];

export function setMazeGenFlag(flag: boolean) {
  mazeGenFlag = flag;
}
export function getMazeGenFlag() {
  return mazeGenFlag;
}

export function stopMazeGen() {
  mazeGenFlag = false;
}

export function setMazeTimer(timer: NodeJS.Timeout) {
  mazetimers.push(timer);
}
export function getMazeTimers() {
  return mazetimers;
}

export function clearMazeTimers() {
  logInfo("Maze generation stoped!");
  getMazeTimers().forEach(clearTimeout);
  mazetimers = [];
}
