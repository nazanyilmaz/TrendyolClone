import {createSlice} from '@reduxjs/toolkit';
import {FavoritesTypes} from '../../models/home/favorites';

const initialState: FavoritesTypes = {
  favorites: [],
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state: {favorites: any[]}, action: {payload: any}) => {
      const productExits = state.favorites.some(
        p => p.id === action.payload.id,
      );
      if (!productExits) state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.id,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
