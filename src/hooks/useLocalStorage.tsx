import { logError } from "@/utils/log";
import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key: string) {
  const [storedValue, setStoredValue] = useState<any | null>(null);
  const serialize = JSON.stringify;
  const deserialize = JSON.parse;

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      item && setStoredValue(deserialize(item));
    } catch (error) {
      logError(error);
    }
  }, []);

  const setLSValue = useCallback(
    (value: any) => {
      try {
        localStorage.setItem(key, serialize(value));
        setStoredValue(value);
      } catch (error) {
        logError(error);
      }
    },
    [key, serialize]
  );

  const deleteLSValue = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      logError(error);
    }
  }, []);

  return { storedValue, setLSValue, deleteLSValue };
}
