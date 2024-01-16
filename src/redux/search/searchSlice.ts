import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  searchProducts: string | null,
}

const initialState: InitialState = {
  searchProducts: null,
};

const setSearchSlice = createSlice({
  name: 'search-products',
  initialState,
  reducers: {
    searchProducts: (store, { payload }: PayloadAction<string | null>) => ({
      ...store,
      searchProducts: payload,
    }),
  },
});

export const { searchProducts } = setSearchSlice.actions;

export default setSearchSlice.reducer;