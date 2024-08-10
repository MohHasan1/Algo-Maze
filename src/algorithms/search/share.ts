/**
 * This file contains variables that is shared between all the search algo. This pattern is inspired by OOP.
 *
 * @stopSearch This flag is initially false, but when true all the search algorithm will stop at point and return from the function.
 *
 * @timers This array conatins all the timer that are running, so we can close all the timer when we exit teh function manually.
 */

import { logInfo } from "@/utils/log";

let searchFlag: boolean = true;
let timers: NodeJS.Timeout[] = [];

export function setSearchflag(flag: boolean) {
  searchFlag = flag;
}
export function getSearchFlag() {
  return searchFlag;
}

export function stopSearch() {
  searchFlag = false;
}

export function setTimer(timer: NodeJS.Timeout) {
  timers.push(timer);
}
export function getTimers() {
  return timers;
}

export function clearTimers() {
  logInfo("Search Alg Stoped!");
  getTimers().forEach(clearTimeout);
  timers = [];
}
