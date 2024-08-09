export function logError(...errors: any[]) {
  console.error("DEBUG-ERROR: ", ...errors);
}

export function logInfo(...info: any[]) {
  console.info("DEBUG-INFO: ", ...info);
}

export function logWarn(...info: any[]) {
  console.warn("DEBUG-WARN: ", ...info);
}
