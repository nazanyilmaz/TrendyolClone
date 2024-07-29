import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getCarts, updateCarts} from '../actions/CartsActions';
import {CartTypes} from '../../models/home/cartProps';

const initialState: CartTypes = {
  cart: [],
  totalPrice: 0,
  pending: false,
  error: {},
};

const CartsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      state.totalPrice += Math.floor(action.payload);
    },
    deleteItemCart: (state, action) => {
      (state.cart = state.cart.filter(
        p => p.productId !== action.payload.productId,
      )),
        (state.totalPrice -= Math.floor(action.payload.price));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarts.pending, state => {
        state.pending = true;
      })
      .addCase(getCarts.fulfilled, (state, action: PayloadAction<T>) => {
        state.cart = action.payload;
        state.pending = false;
      })
      .addCase(getCarts.rejected, (state, action: PayloadAction<T>) => {
        state.error = action.payload.error;
      })
      .addCase(updateCarts.pending, state => {
        state.pending = true;
      })
      .addCase(updateCarts.fulfilled, (state, action: PayloadAction<T>) => {
        state.cart = [...state.cart, action.payload];
        state.pending = false;
      })
      .addCase(updateCarts.rejected, (state, action: PayloadAction<T>) => {
        state.error = action.payload.error;
      });
  },
});

export default CartsSlice.reducer;
export const {setTotalPrice, deleteItemCart} = CartsSlice.actions;
