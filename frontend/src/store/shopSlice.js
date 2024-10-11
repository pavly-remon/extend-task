import { createSlice } from "@reduxjs/toolkit";
export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        products: []
    },
    reducers: {
    //TODO: Add reducers
    }
});
// export const { toggleTheme } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
export default shopReducer;
