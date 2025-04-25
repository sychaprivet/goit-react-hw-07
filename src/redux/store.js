import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    filters: filtersReducer,
  },
});
