import { createSlice } from "@reduxjs/toolkit";
export const selectFilters = state => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    nameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { nameFilter } = slice.actions;
export default slice.reducer;
