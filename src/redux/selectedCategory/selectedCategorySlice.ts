import { ICategory } from "../../types/ICategory";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  selectCategory: ICategory["key"] | null,
}

const initialState: InitialState = {
  selectCategory: null,
};

const selectedCategoriesSlice = createSlice({
  name: 'selected-categories',
  initialState,
  reducers: {
    selectedCategories: (store, { payload }: PayloadAction<ICategory["key"] | null>) => ({
      ...store,
      selectCategory: payload,
    }),
  },
});

export const { selectedCategories } = selectedCategoriesSlice.actions;

export default selectedCategoriesSlice.reducer;
