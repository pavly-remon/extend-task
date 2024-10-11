export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    theme: {
        theme: string;
        productListView: string;
    };
    shop: {
        products: never[];
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        theme: {
            theme: string;
            productListView: string;
        };
        shop: {
            products: never[];
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
