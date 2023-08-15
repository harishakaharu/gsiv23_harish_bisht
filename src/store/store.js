import { configureStore } from "@reduxjs/toolkit";
import moviceSliceReducers from "./movieSlice";

const store = configureStore({
  reducer: moviceSliceReducers,
});

export default store;
