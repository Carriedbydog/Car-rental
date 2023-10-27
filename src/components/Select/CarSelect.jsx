import React, { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';

const CarSelect = ({ onFilter, cars, setFilteredCars }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const onCarChange = [
    { value: 'all', label: 'All' },
    { value: 'Audi', label: 'Audi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'Aston', label: 'Aston Martin' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Land Rover', label: 'Land Rover' },
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Lexus', label: 'Lexus' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Porsche', label: 'Porsche' },
  ];

  const rentMaxPrice = Math.max(
    ...cars.map(car => parseFloat(car.rentalPrice.slice(1)))
  );
  const rentPrice = [];

  for (let value = 0; value <= rentMaxPrice; value += 10) {
    rentPrice.push({ value: value.toString(), label: value.toString() });
  }

  // const filter = () => {
  //   let filterCars = [...cars];

  //   if (
  //     !selectedCar &&
  //     !selectedPrice &&
  //     fromMileage === '' &&
  //     toMileage === ''
  //   ) {
  //     toast.warning('Please, select any filter');
  //     setFilteredCars([]);
  //     return;
  //   }
  //   if (selectedCar) {
  //     filterCars = filterCars.filter(car => car.make === selectedCar.value);

  //   }
  //   if (selectedPrice) {
  //     filterCars = filterCars.filter(
  //       car => parseFloat(car.rentalPrice.slice(1)) <= selectedPrice.value
  //     );
  //   }
  //   if (fromMileage !== '' && toMileage !== '') {
  //     filterCars = filterCars.filter(car => parseFloat(car.mileage) <= parseFloat(toMileage))
  //   }
  //   if (filterCars.length === 0) {
  //     toast.warning('No cars found');
  //   }
  //   setFilteredCars(filterCars);
  // }

  const handleFormSubmit = e => {
    e.preventDefault();

    let filteredCars = [...cars];

    if (
      !selectedCar &&
      !selectedPrice &&
      fromMileage === '' &&
      toMileage === ''
    ) {
      toast.warning('Please, select any filter');
    } else {
      if (selectedCar) {
        filteredCars = filteredCars.filter(
          car => car.make === selectedCar.value
        );
      }

      if (selectedPrice) {
        filteredCars = filteredCars.filter(
          car => parseFloat(car.rentalPrice.slice(1)) <= selectedPrice.value
        );
      }

      if (fromMileage !== '') {
        filteredCars = filteredCars.filter(
          car => parseFloat(car.mileage) >= parseFloat(fromMileage)
        );
      }

      if (toMileage !== '') {
        filteredCars = filteredCars.filter(
          car => parseFloat(car.mileage) <= parseFloat(toMileage)
        );
      }

      if (filteredCars.length === 0) {
        toast.warning('No cars found');
      }
    }

    onFilter(filteredCars);

    // const filter = {
    //   selectedCar: selectedCar ? selectedCar.value : null,
    //   selectedPrice: selectedPrice ? selectedPrice.value : null,
    //   fromMileage: fromMileage,
    //   toMileage: toMileage,
    // };
    // onFilter(filter);

    // setSelectedCar(null);
    // setSelectedPrice(null);
    // setFromMileage('');
    // setToMileage('');
  };
  // const handleCarChange = option => {
  //   setSelectedCar(option.value === 'all' ? null : option.value);
  // };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center align-baseline gap-[40px]"
    >
      <div className="form-control w-full max-w-[224px]">
        <label className="label">
          <span className="label-text">Car brand</span>
        </label>
        <Select
          placeholder="Enter the text"
          options={onCarChange}
          onChange={option => setSelectedCar(option)}
          value={selectedCar}
          // value={onCarChange.find(option => option.value === selectedCar)}
        />
      </div>
      <div className="max-w-[125px] w-full">
        <label className="label">
          <span className="label-text">Price/ 1 hour</span>
        </label>
        <Select
          value={selectedPrice}
          onChange={option => setSelectedPrice(option)}
          options={rentPrice}
          placeholder="To $"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Car mileage/ km</span>
        </label>
        <input
          value={fromMileage}
          className="w-[160px] h-12 bg-inputColor border-r-[1px] border-border rounded-l-[14px] px-[20px]"
          type="number"
          placeholder="From"
          onChange={e => setFromMileage(e.target.value)}
        />
        <input
          value={toMileage}
          className="w-[160px] h-12 bg-inputColor rounded-r-[14px] px-[20px]"
          type="number"
          placeholder="To"
          onChange={e => setToMileage(e.target.value)}
        />
      </div>
      <button className="flex justify-center items-center w-[136px] h-[48px] rounded-[12px] py-[14px] px-[44px] bg-blue-600 text-white font-medium text-lg hover:bg-blue-800 transition-colors text-[14px]">
        Search
      </button>
    </form>
  );
};

export default CarSelect;
