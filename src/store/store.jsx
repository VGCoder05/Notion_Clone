import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducer/dataSlice";

export default configureStore({
  reducer: {
    dataSlice: dataSlice,
  },
});
