import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.ts";
import shopReducer from "./shopSlice.ts";
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        shop: shopReducer,
    }
});
export default store;
