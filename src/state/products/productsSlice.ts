import ProductType from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  products: ProductType[];
}

const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
