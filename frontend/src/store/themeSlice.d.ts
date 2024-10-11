export interface ThemeState {
    theme: string;
    productListView: string;
}
export declare const themeSlice: import("@reduxjs/toolkit").Slice<{
    theme: string;
    productListView: string;
}, {
    toggleTheme: (state: ThemeState) => void;
    toggleProductListView: (state: ThemeState) => void;
    setTheme: (state: ThemeState, action: {
        payload: any;
        type: string;
    }) => void;
}, "theme", "theme", import("@reduxjs/toolkit").SliceSelectors<{
    theme: string;
    productListView: string;
}>>;
export declare const toggleTheme: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"theme/toggleTheme">, toggleProductListView: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"theme/toggleProductListView">, setTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/setTheme">;
export declare const themeReducer: import("redux").Reducer<{
    theme: string;
    productListView: string;
}>;
export default themeReducer;
