import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addToFavoritesThunk,
  deleteFromFavoritesThunk,
  fetchCarsThunk,
  loadMoreThunk,
} from './operations';

const initialState = {
  cars: [],
  loading: false,
  error: null,
  favorites: [],
};

export const slice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cars = payload;
      })
      .addCase(loadMoreThunk.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
      })
      .addCase(addToFavoritesThunk.fulfilled, (state, { payload }) => {
        state.favorites.push(payload);
      })
      .addCase(deleteFromFavoritesThunk.fulfilled, (state, { payload }) => {
        state.favorites = state.favorites.filter(
          favorite => favorite.id !== payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.pending,
          deleteFromFavoritesThunk.pending,
          addToFavoritesThunk.pending,
          loadMoreThunk.pending
        ),
        (state, { payload }) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.rejected,
          deleteFromFavoritesThunk.rejected,
          addToFavoritesThunk.rejected,
          loadMoreThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});
export const carsReducer = slice.reducer;
