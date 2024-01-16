import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  menuOpen: boolean,
}

const initialState: InitialState = {
  menuOpen: false,
};

const setMenuOpenSlice = createSlice({
  name: 'open-menu',
  initialState,
  reducers: {
    setMenuOpen: (store, { payload }: PayloadAction<boolean>) => ({
      ...store,
      menuOpen: payload,
    }),
  },
});

export const { setMenuOpen } = setMenuOpenSlice.actions;

export default setMenuOpenSlice.reducer;
