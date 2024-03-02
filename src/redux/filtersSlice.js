import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
