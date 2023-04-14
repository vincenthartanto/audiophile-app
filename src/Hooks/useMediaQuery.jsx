import { useState, useSyncExternalStore } from "react";

const useMediaQuery = () => {
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    },
    () => window.innerWidth
  );
  return width;
};
export default useMediaQuery;
