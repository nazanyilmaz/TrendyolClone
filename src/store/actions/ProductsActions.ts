import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  BESTSELLERS,
  CATEGORY_URL,
  NEWARRIVALPRODUCTS,
} from '../../service/urls';

const getProducts = createAsyncThunk(
  'products/getProducts',
  async (params: object) => {
    const response = await getRequest(
      `${CATEGORY_URL}/${params.category}`,
      params,
    );
    return response.data;
  },
);
const getNewArrivalProducts = createAsyncThunk(
  'products/getNewArrivalProducts',
  async (params: object) => {
    const response = await getRequest(NEWARRIVALPRODUCTS, params);
    return response.data;
  },
);
const getBestSellersProducts = createAsyncThunk(
  'products/getBestSellersProducts',
  async (params: object) => {
    const response = await getRequest(BESTSELLERS, params);
    return response.data;
  },
);

export {getProducts, getNewArrivalProducts, getBestSellersProducts};
