import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: string;
}


export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light"
  },
  reducers: {
    toggleTheme: (state: ThemeState) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export default themeReducer;