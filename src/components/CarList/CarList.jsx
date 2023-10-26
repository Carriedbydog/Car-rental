import CarItem from 'components/CarItem/CarItem';
import CarSelect from 'components/Select/CarSelect';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCarsForFilterThunk,
  fetchCarsThunk,
  loadMoreThunk,
} from 'redux/carRental/operations';
import {
  selectCarFilters,
  selectCars,
  selectError,
  selectloading,
} from 'redux/carRental/selectors';
import { addtoFav, deleteFromFav } from 'redux/carRental/slice';

const CarList = () => {
  const carsWithLimit = useSelector(selectCars);
  const allCars = useSelector(selectCarFilters);
  const dispatch = useDispatch();
  const loading = useSelector(selectloading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(fetchCarsThunk(1));
    dispatch(fetchAllCarsForFilterThunk());
  }, [dispatch]);

  const handleAddToFav = (id, isInFav) => {
    !isInFav ? dispatch(addtoFav(id)) : dispatch(deleteFromFav(id));
  };

  const handleBtnLoadMore = () => {
    const loadPage = page + 1;
    setPage(loadPage);
    dispatch(loadMoreThunk(loadPage));
  };
  const handleCarChange = selectedCar => {
    setSelectedCar(selectedCar);
  };

  const filteredCars = allCars.filter(
    car => !selectedCar || car.make === selectedCar
  );

  return (
    <div className="flex flex-col justify-center al m-auto p-[30px] min-h-screen">
      <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)] mb-[100px]">
        {loading && <h1 className="text-2xl">Loading...</h1>}
        {error && <h1 className="text-2xl">Something went wrong...😢</h1>}
        <CarSelect selectedCar={selectedCar} setSelectedCar={handleCarChange} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCars.map(car => (
            <CarItem key={car.id} car={car} handleAddToFav={handleAddToFav} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-[100px]">
        {allCars.length !== 32 && (
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
