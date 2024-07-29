import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../service/verbs';
import {LOGIN_URL, USER_URL} from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginUser = createAsyncThunk('auth/loginUser', async (params: object) => {
  //console.log(params);
  const response = await postRequest(LOGIN_URL, params);
  await AsyncStorage.setItem('token', response.data.token);
  //console.log(response.data);
  return response.data;
});

const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (params: any) => {
    //console.log(params);
    const response = await getRequest(`${USER_URL}/${params.userId}`, params);
    //console.log(response.data);
    return response.data;
  },
);

export {loginUser, getUserInfo};
