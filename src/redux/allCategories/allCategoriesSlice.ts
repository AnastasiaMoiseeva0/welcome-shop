import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from "../../types/ICategory";

export interface InitialState {
  categories: ICategory[],
}

const initialState: InitialState = {
  categories: [],
};

const allCategoriesSlice = createSlice({
  name: 'all-categories',
  initialState,
  reducers: {
    allCategories: (store, { payload }: PayloadAction<ICategory[]>) => ({
      ...store,
      categories: payload,
    }),
  },
});

export const { allCategories } = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;