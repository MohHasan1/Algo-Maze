let prod = false;

export function logError(...errors: any[]) {
  if (!prod) return;
  console.error("DEBUG-ERROR: ", ...errors);
}

export function logInfo(...info: any[]) {
  if (!prod) return;
  console.info("DEBUG-INFO: ", ...info);
}

export function logWarn(...info: any[]) {
  if (!prod) return;
  console.warn("DEBUG-WARN: ", ...info);
}
