import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { fetchFilteredCarsThunk } from 'redux/carRental/operations';

const Filter = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const dispatch = useDispatch();

  const make = [
    { value: 'All', label: 'All' },
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

  const price = [];

  for (let value = 0; value <= 500; value += 10) {
    price.push({ value: value.toString(), label: value.toString() });
  }

  const handleFormSubmit = e => {
    e.preventDefault();

    if (selectedPrice || selectedCar || mileageFrom || mileageTo) {
      let selectedMake = selectedCar ? selectedCar.value : null;
      const filters = {
        make: selectedMake === 'All' ? null : selectedMake,
        price: selectedPrice ? selectedPrice.value : null,
        mileageFrom: mileageFrom,
        mileageTo: mileageTo,
      };

      dispatch(fetchFilteredCarsThunk(filters));
    } else {
      toast.error('No cars found');
    }
  };
  const customStyle = {
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center items-end gap-[18px] mb-[50px]"
    >
      <div className="w-[224px] rounded-[14px]">
        <label className="label">
          <span className="label-text">Car brand</span>
        </label>
        <Select
          styles={customStyle}
          placeholder="Enter the text"
          options={make}
          onChange={option => setSelectedCar(option)}
          value={selectedCar}
        />
      </div>
      <div className="max-w-[125px] w-full">
        <label className="label">
          <span className="label-text">Price/ 1 hour</span>
        </label>
        <Select
          styles={customStyle}
          value={selectedPrice}
          onChange={option => setSelectedPrice(option)}
          options={price}
          placeholder="To $"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Car mileage/ km</span>
        </label>
        <div className="flex">
          <input
            value={mileageFrom}
            className="w-[160px] h-12 bg-slate-50 border-r-[1px] border-border rounded-l-[14px] px-[20px]"
            type="number"
            placeholder="From"
            onChange={e => setMileageFrom(e.target.value)}
          />
          <input
            value={mileageTo}
            className="w-[160px] bg-slate-50 h-12 rounded-r-[14px] px-[20px]"
            type="number"
            placeholder="To"
            onChange={e => setMileageTo(e.target.value)}
          />
        </div>
      </div>
      <button className="flex justify-center items-center w-[136px] h-[48px] rounded-[12px] py-[14px] px-[44px] bg-blue-600 text-white font-medium text-lg hover:bg-blue-800 transition-colors text-[14px]">
        Search
      </button>
    </form>
  );
};

export default Filter;
