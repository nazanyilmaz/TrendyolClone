import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await getRequest(CATEGORIES_URL, {});
  return response.data;
});

export {getCategories};
