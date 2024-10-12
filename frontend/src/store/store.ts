import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.ts";
import shopReducer from "./shopSlice.ts";
import {authReducer} from "./authSlice.ts";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        shop: shopReducer,
        auth: authReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;