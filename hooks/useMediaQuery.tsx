import { useCallback, useSyncExternalStore } from "react";

const getServerSnapshot = () => false;

function useMediaQuery(width: number) {
  const query = `(max-width: ${width}px)`;
  const subscribe = useCallback((onChange: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
