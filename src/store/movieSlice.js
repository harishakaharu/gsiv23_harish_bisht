import { createSlice } from "@reduxjs/toolkit";
const initialData = {
  movies: [],
  selectedID: 0,
};
const movieSlice = createSlice({
  name: "moviesDetails",
  initialState: initialData,
  reducers: {
    addList(state, action) {
      state.movies = action.payload;
    },
    selectDetails(state, action) {
      state.selectedID = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const moviesAction = movieSlice.actions;
