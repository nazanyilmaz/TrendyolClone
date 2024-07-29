import {createSlice} from '@reduxjs/toolkit';
import {AuthTypes} from '../../models/home/auth';
import {getUserInfo, loginUser} from '../actions/AuthActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: AuthTypes = {
  isLogin: false,
  pending: false,
  token: '',
  userInfo: {},
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoginCheck: (state, action) => {
      state.token = action.payload;
      if (action.payload) state.isLogin = true;
    },
    logOut: (state, action) => {
      state.isLogin = false;
      state.token = action.payload;
      AsyncStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.pending = false;
        state.isLogin = true;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, state => {
        state.pending = false;
      })
      .addCase(getUserInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.pending = false;
      })
      .addCase(getUserInfo.rejected, state => {
        state.pending = false;
      });
  },
});

export default AuthSlice.reducer;
export const {userLoginCheck, logOut} = AuthSlice.actions;
