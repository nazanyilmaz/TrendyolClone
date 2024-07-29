import {createSlice} from '@reduxjs/toolkit';
import {
  getBestSellersProducts,
  getNewArrivalProducts,
  getProducts,
} from '../actions/ProductsActions';
import {ProductsTypes} from '../../models/home/productsProps';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductsTypes = {
  products: [],
  newArrival: [],
  bestSeller: [],
  pending: false,
  error: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) product.favorite = true;
    },
    unSetFavorite: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) product.favorite = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<T>) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<T>) => {
        state.error = action.payload.error;
        state.pending = false;
      })
      .addCase(getNewArrivalProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getNewArrivalProducts.fulfilled,
        (state, action: PayloadAction<T>) => {
          state.newArrival = action.payload;
        },
      )
      .addCase(
        getNewArrivalProducts.rejected,
        (state, action: PayloadAction<T>) => {
          state.error = action?.payload?.error;
        },
      )
      .addCase(getBestSellersProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getBestSellersProducts.fulfilled,
        (state, action: PayloadAction<T>) => {
          state.bestSeller = action.payload;
        },
      )
      .addCase(
        getBestSellersProducts.rejected,
        (state, action: PayloadAction<T>) => {
          state.error = action.payload.error;
        },
      );
  },
});

export const {setFavorite, unSetFavorite} = productsSlice.actions;
export default productsSlice.reducer;
