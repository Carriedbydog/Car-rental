import CarItem from 'components/CarItem/CarItem';
import CarSelect from 'components/Select/CarSelect';
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

  // const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [filteredCars, setFilteredCars] = useState(null);

  // const [selectedCar, setSelectedCar] = useState(null);
  // const [isDataFiltering, setIsDataFiltering] = useState(false);
  // let limit = 12;
  // const [filter, setFilter] = useState({
  //   selectedCar: null,
  //   selectedPrice: null,
  //   fromMileage: '',
  //   toMileage: '',
  // });

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit: 12 })).then(() => {
      setPage(2);
    });
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchCarsThunk({ page: 1, limit, ...filter }));
  // }, [dispatch, page, filter, limit]);

  // useEffect(() => {
  //   if (isDataFiltering) {
  //     if (
  //       filter.selectedCar ||
  //       filter.selectedPrice ||
  //       filter.fromMileage ||
  //       filter.toMileage
  //     ) {
  //       const filteredData = cars.filter(car => {
  //         const carMake =
  //           !filter.selectedCar ||
  //           car.make.toLowerCase().includes(filter.selectedCar.toLowerCase());
  //         const carPrice =
  //           !filter.selectedPrice ||
  //           Number(car.rentalPrice.slice(1)) <= Number(filter.selectedPrice);
  //         const carMileage =
  //           !filter.fromMileage ||
  //           Number(car.mileage) >= Number(filter.fromMileage);

  //         return carMake && carPrice && carMileage;
  //       });
  //       setFilteredCars(filteredData);
  //     } else {
  //       setFilteredCars(cars);
  //     }
  //   } else {
  //     setFilteredCars(cars);
  //   }
  // }, [cars, filter, isDataFiltering]);

  const handleAddToFav = (id, isInFav) => {
    !isInFav ? dispatch(addtoFav(id)) : dispatch(deleteFromFav(id));
  };

  // const handleBtnLoadMore = () => {
  //   const loadPage = page + 1;
  //   setPage(loadPage);
  //   dispatch(loadMoreThunk(loadPage));
  // };

  const handleBtnLoadMore = () => {
    dispatch(fetchCarsThunk({ page: page, limit: 12 })).then(() => {
      setPage(page + 1);
    });
  };

  // const handleBtnLoadMore = () => {
  //   setPage(prev => prev + 1);
  //   const newLimit = limit * (page + 1);
  //   dispatch(fetchCarsThunk({ page: page + 1, limit: newLimit, ...filter }));
  // };

  // const handleCarChange = selectedCar => {
  //   setSelectedCar(selectedCar);
  // };

  // const filteredCars = cars.filter(
  //   car => !selectedCar || car.make === selectedCar
  // );

  return (
    <div className="flex flex-col justify-center al m-auto p-[30px] min-h-screen">
      <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)] mb-[100px]">
        {loading && <h1 className="text-2xl">Loading...</h1>}
        {error && <h1 className="text-2xl">Something went wrong...😢</h1>}
        <CarSelect
          // selectedCar={selectedCar}
          // setSelectedCar={handleCarChange}
          // onFilter={newFilter => {
          //   setFilter(newFilter);
          //   setIsDataFiltering(true);
          // }}
          filteredCars={filteredCars}
          cars={cars}
          onFilter={setFilteredCars}
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCars?.map(car => (
            <CarItem key={car.id} car={car} handleAddToFav={handleAddToFav} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-[100px]">
        {cars.length !== 32 && (
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
