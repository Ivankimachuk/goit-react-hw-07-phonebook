import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";

export const store = configureStore({
  reducer: {
    appState: appReducer,
  }
});