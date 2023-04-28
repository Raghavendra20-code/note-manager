import { configureStore } from "@reduxjs/toolkit";
import {notesSlice} from "./notes/notes-slice";

export const store = configureStore({
  reducer: {
    noteSlice:notesSlice.reducer
  },
});
