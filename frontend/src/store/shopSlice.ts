import { createSlice } from "@reduxjs/toolkit";

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