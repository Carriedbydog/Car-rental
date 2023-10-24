import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const carApi = axios.create({
  baseURL: 'https://651411798e505cebc2eaa668.mockapi.io',
});

export const fetchCarsThunk = createAsyncThunk(
  'fetchCars',
  async (page = 1, thunkApi) => {
    try {
      const { data } = await carApi.get(`adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
export const loadMoreThunk = createAsyncThunk(
  'loadMore',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await carApi.get(`adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
