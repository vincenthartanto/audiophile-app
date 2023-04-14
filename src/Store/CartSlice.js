import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "Cart-Slice",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const exist = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      if (!exist) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: +action.payload.price,
          quantity: +action.payload.quantity,
          image: action.payload.image,
        });
      } else {
        exist.quantity = exist.quantity + +action.payload.quantity;
      }
      state.totalPrice =
        state.totalPrice + action.payload.quantity * action.payload.price;
    },
    removeCart: (state, action) => {
      console.log(state.items.length);
      const exist = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (exist.quantity <= 1) {
        state.items = state.items.filter((items) => {
          return items.id !== exist.id;
        });
      } else {
        exist.quantity -= 1;
      }
      state.totalPrice = state.totalPrice - exist.price;
    },
    removeAll: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
