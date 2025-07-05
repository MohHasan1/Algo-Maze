let prod = false;

export function logError(...errors: unknown[]) {
  if (!prod) return;
  console.error("DEBUG-ERROR: ", ...errors);
}

export function logInfo(...info: unknown[]) {
  if (!prod) return;
  console.info("DEBUG-INFO: ", ...info);
}

export function logWarn(...info: unknown[]) {
  if (!prod) return;
  console.warn("DEBUG-WARN: ", ...info);
}
