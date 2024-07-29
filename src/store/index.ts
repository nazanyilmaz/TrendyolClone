import {configureStore} from '@reduxjs/toolkit';
import ProductsSlice from './slices/ProductsSlice';
import CategoriesSlice from './slices/CategoriesSlice';
import CartsSlice from './slices/CartsSlice';
import FavoriteSlice from './slices/FavoriteSlice';
import AuthSlice from './slices/AuthSlice';
import NotificationSlice from './slices/NotificationSlice';

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    categories: CategoriesSlice,
    cart: CartsSlice,
    favorites: FavoriteSlice,
    auth: AuthSlice,
    notifications: NotificationSlice,
  },
});
