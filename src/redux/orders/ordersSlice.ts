import { ICard } from "../../types/ICard";
import { IOrder } from "../../types/IOrder";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  orders: IOrder[],
}

const initialState: InitialState = {
  orders: [],
};

const addOrdersSlice = createSlice({
  name: 'add-orders',
  initialState,
  reducers: {
    addOrder: (store, { payload }: PayloadAction<ICard>) => ({
      ...store,
      orders: [...store.orders, {
        ...payload,
        quantity: 1
      }]
    }),
    increaseQuantity: (store, { payload }: PayloadAction<ICard['id']>) => {
      const order = store.orders.find(p => p.id === payload);
      if(order) {
        order.quantity += 1
      }
    },
    decreaseQuantity: (store, { payload }: PayloadAction<ICard['id']>) => {
      const order = store.orders.find(p => p.id === payload);
      if(order && order.quantity > 1) {
        order.quantity -= 1
      }
    },
    deleteOrder: (store, { payload }: PayloadAction<IOrder['id']>) => {
      store.orders = store.orders.filter((o) => o.id !== payload);

      return store;
    },
  },
});

export const { addOrder, increaseQuantity, decreaseQuantity, deleteOrder } = addOrdersSlice.actions;

export default addOrdersSlice.reducer;
