import CarItem from 'components/CarItem/CarItem';
import Filter from 'components/Filter/Filter';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCarsThunk,
  fetchFilteredCarsThunk,
  loadMoreThunk,
} from 'redux/carRental/operations';
import {
  selectCars,
  selectCritera,
  selectError,
  selectloading,
} from 'redux/carRental/selectors';
import { addtoFav, deleteFromFav } from 'redux/carRental/slice';

const CarList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const loading = useSelector(selectloading);
  const error = useSelector(selectError);
  const criteria = useSelector(selectCritera);
  const [page, setPage] = useState(1);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    dispatch(fetchCarsThunk(1));
  }, [dispatch]);

  const handleBtnLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    if (!isFilter) {
      dispatch(loadMoreThunk(newPage));
    }
    const LoadNewData = { ...criteria, page: newPage };
    dispatch(fetchFilteredCarsThunk(LoadNewData));
  };

  const handleAddToFav = (id, isInFav) => {
    !isInFav ? dispatch(addtoFav(id)) : dispatch(deleteFromFav(id));
  };

  return (
    <div className="flex flex-col justify-center al m-auto p-[30px] min-h-screen">
      <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)] mb-[100px]">
        {loading && <h1 className="text-2xl">Loading...</h1>}
        {error && <h1 className="text-2xl">Something went wrong...😢</h1>}
        <Filter setIsFilter={setIsFilter} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cars?.map(car => (
            <CarItem key={car.id} car={car} handleAddToFav={handleAddToFav} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-[100px]">
        {cars?.length % 12 === 0 &&
          cars?.length !== 0 &&
          cars?.length !== 35 && (
            <button
              className="w-20 h-10 text-blue-600"
              onClick={handleBtnLoadMore}
            >
              Load more
            </button>
          )}
      </div>
    </div>
  );
};

export default CarList;
