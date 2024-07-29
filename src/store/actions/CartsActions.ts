import {createAsyncThunk} from '@reduxjs/toolkit';
import {CARTS_URL, CART_URL} from '../../service/urls';
import {getRequest, updateRequest} from '../../service/verbs';
import {Alert} from 'react-native';

const getCarts = createAsyncThunk('cart/getCarts', async (params: object) => {
  //console.log(params);
  const response = await getRequest(`${CARTS_URL}${params.userId}`, params);
  return response.data[0].products;
});
const updateCarts = createAsyncThunk(
  'cart/updateCarts',
  async (params: object, userId: string) => {
    //console.log(params);
    const response = await updateRequest(
      `${CART_URL}${String(params.userId)}`,
      params,
    );
    if (response.status == 200) {
      Alert.alert('Alert Title', 'Added successful', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    return response.data.products[0];
  },
);

export {getCarts, updateCarts};
