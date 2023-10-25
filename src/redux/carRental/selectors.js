import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;
export const selectloading = state => state.cars.loading;
export const selectError = state => state.cars.error;
export const selectFavorites = state => state.cars.favorites;
export const selectFilters = state => state.cars.filters;

export const selectCarFilters = createSelector(
  state => state.cars.filters,
  filters => filters
);
