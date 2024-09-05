import { configureStore } from "@reduxjs/toolkit";
import frameworksReducer from "./frameworksSlice";

const store = configureStore({
  reducer: {
    frameworks: frameworksReducer,
  },
});

export default store;
