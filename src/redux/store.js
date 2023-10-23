import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carRental/slice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
