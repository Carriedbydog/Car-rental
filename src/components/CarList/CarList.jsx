import CarItem from 'components/CarItem/CarItem';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk, loadMoreThunk } from 'redux/carRental/operations';
import {
  selectCars,
  selectError,
  selectloading,
} from 'redux/carRental/selectors';
import { addtoFav, deleteFromFav } from 'redux/carRental/slice';

const CarList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const loading = useSelector(selectloading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCarsThunk(1));
  }, [dispatch]);

  const handleAddToFav = (id, isInFav) => {
    !isInFav ? dispatch(addtoFav(id)) : dispatch(deleteFromFav(id));
  };

  const handleBtnLoadMore = () => {
    const loadPage = page + 1;
    setPage(loadPage);
    dispatch(loadMoreThunk(loadPage));
  };
  return (
    <>
      <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)]">
        {loading && <h1 className="text-2xl">Loading...</h1>}
        {error && <h1 className="text-2xl">Something went wrong...😢</h1>}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cars?.map(car => (
            <CarItem key={car.id} car={car} handleAddToFav={handleAddToFav} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        {cars.length !== 24 && (
          <button
            className="w-20 h-10 text-blue-600"
            onClick={handleBtnLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default CarList;
