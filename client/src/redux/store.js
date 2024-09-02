import { configureStore } from "@reduxjs/toolkit";
import frameworksReducer from "./frameworksSlice";

export default configureStore({
  reducer: {
    frameworks: frameworksReducer,
  },
});
