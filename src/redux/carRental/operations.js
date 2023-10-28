import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
export const fetchFilteredCarsThunk = createAsyncThunk(
  'fetchFilteredCars',
  async (criteria, { rejectWithValue }) => {
    const { make, mileageFrom, mileageTo, price, page = 1 } = criteria;
    try {
      const { data } = await carApi.get('adverts');
      let carsArr = data;

      if (make) {
        carsArr = carsArr.filter(car => car.make === make);
        toast.success(`Found ${carsArr.length} cars`);
      }

      if (price) {
        carsArr = carsArr.filter(
          car => Number(car.rentalPrice.slice(1)) <= Number(price)
        );
        toast.success(
          `Found ${carsArr.length} cars with price less than ${price}`
        );
      }

      if (mileageFrom && mileageTo) {
        carsArr = carsArr.filter(car => {
          return (
            Number(car.mileage) >= Number(mileageFrom) &&
            Number(car.mileage) <= Number(mileageTo)
          );
        });
      } else if (mileageFrom) {
        carsArr = carsArr.filter(
          car => Number(car.mileage) >= Number(mileageFrom)
        );
      } else if (mileageTo) {
        carsArr = carsArr.filter(
          car => Number(car.mileage) <= Number(mileageTo)
        );
      }

      if (page && carsArr.length > 12) {
        carsArr = carsArr.slice(0, page * 12);
      }

      if (carsArr.length === 0) {
        return toast.error('No cars found');
      }

      const newData = { carsArr, criteria };
      return newData;
    } catch (error) {
      rejectWithValue(error);
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
