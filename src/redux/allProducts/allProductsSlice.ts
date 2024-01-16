import { ICard } from "../../types/ICard";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  products: ICard[],
}

const initialState: InitialState = {
  products: [],
};

const allProductsSlice = createSlice({
  name: 'all-products',
  initialState,
  reducers: {
    allProducts: (store, { payload }: PayloadAction<ICard[]>) => ({
      ...store,
      products: payload,
    }),
  },
});

export const { allProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;