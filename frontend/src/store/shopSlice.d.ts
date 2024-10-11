export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    imgUrl?: string | null;
}
export interface ShopState {
    products: Product[];
}
export declare const shopSlice: import("@reduxjs/toolkit").Slice<{
    products: never[];
}, {}, "shop", "shop", import("@reduxjs/toolkit").SliceSelectors<{
    products: never[];
}>>;
export declare const shopReducer: import("redux").Reducer<{
    products: never[];
}>;
export default shopReducer;
