import CarItem from 'components/CarItem/CarItem';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
    } else {
      const loadNewData = { ...criteria, page: newPage };
      dispatch(fetchFilteredCarsThunk(loadNewData));
    }
  };

  const handleAddToFav = (id, isInFav) => {
    if (!isInFav) {
      dispatch(addtoFav(id));
      toast.success('Car added to favorites');
    } else {
      dispatch(deleteFromFav(id));
      toast.success('Car removed from favorites');
    }
  };

  return (
    <div className="flex flex-col justify-center al m-auto p-[30px] min-h-screen">
      <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)] mb-[100px]">
        {error && <h1 className="text-2xl">Something went wrong...😢</h1>}
        <Filter setIsFilter={setIsFilter} />
        {loading && <Loader />}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {cars?.map(car => (
            <CarItem key={car.id} car={car} handleAddToFav={handleAddToFav} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-[100px]">
        {cars?.length % 12 === 0 &&
          cars?.length !== 0 &&
          cars?.length !== 32 && (
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
