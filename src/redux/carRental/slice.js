import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchCarsThunk,
  fetchFilteredCarsThunk,
  loadMoreThunk,
} from './operations';

const initialState = {
  cars: [],
  loading: false,
  error: null,
  favorites: [],
  filter: [],
  criteria: {},
};

export const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addtoFav: (state, { payload }) => {
      const carToAdd = state.cars.find(car => car.id === payload);
      state.favorites.push(carToAdd);
    },
    deleteFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter(fav => fav.id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cars = payload;
      })
      .addCase(fetchFilteredCarsThunk.fulfilled, (state, { payload }) => {
        state.criteria = payload.criteria;
        state.cars = payload.carsArr;
      })
      .addCase(loadMoreThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cars.push(...payload);
      })

      .addMatcher(
        isAnyOf(fetchCarsThunk.pending, loadMoreThunk.pending),
        (state, { payload }) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsThunk.rejected, loadMoreThunk.rejected),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const { addtoFav, deleteFromFav } = slice.actions;
export const carsReducer = slice.reducer;
