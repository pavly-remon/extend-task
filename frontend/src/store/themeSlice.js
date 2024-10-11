import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light",
        productListView: "grid"
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        toggleProductListView: (state) => {
            state.productListView = state.productListView === "grid" ? "list" : "grid";
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});
export const { toggleTheme, toggleProductListView, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export default themeReducer;
