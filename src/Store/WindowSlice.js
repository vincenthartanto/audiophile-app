import { createSlice } from "@reduxjs/toolkit";
import { useSyncExternalStore } from "react";

const WindowSlice = createSlice({
  name: "WindowSlice",
  initialState: {
    width: 0,
  },
  reducers: {
    detectWidth(state) {
      state.width = useSyncExternalStore(
        (listener) => {
          window.addEventListener("resize", listener);
          return () => {
            window.removeEventListener("resize", listener);
          };
        },
        () => window.innerWidth
      );
    },
  },
});
