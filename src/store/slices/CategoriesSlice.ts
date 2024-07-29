import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/CategoriesActions';
import type {PayloadAction} from '@reduxjs/toolkit';
import {CategoriesTypes} from '../../models/home/categoriesProps';

const initialState: CategoriesTypes = {
  categories: [],
  selectedCategory: 'electronics',
  pending: false,
  error: {},
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action: PayloadAction<T>) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action: PayloadAction<T>) => {
        state.error = action.payload.error;
      });
  },
});

export default categoriesSlice.reducer;
export const {changeCategory} = categoriesSlice.actions;
