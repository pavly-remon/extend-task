import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: string;
  productListView: string;
}


export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
    productListView: "grid"
  },
  reducers: {
    toggleTheme: (state: ThemeState) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleProductListView: (state: ThemeState) => {
      state.productListView = state.productListView === "grid" ? "list" : "grid";

    },
    setTheme: (state: ThemeState, action) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleTheme, toggleProductListView, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export default themeReducer;