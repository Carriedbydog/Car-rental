import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { fetchFilteredCarsThunk } from 'redux/carRental/operations';

const Filter = ({ setIsFilter }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const dispatch = useDispatch();

  const make = [
    { value: 'All', label: 'All' },
    { value: 'Audi', label: 'Audi' },
    { value: 'Aston', label: 'Aston Martin' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Buick', label: 'Buick' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Ford', label: 'Ford' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Land Rover', label: 'Land Rover' },
    { value: 'Lexus', label: 'Lexus' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Porsche', label: 'Porsche' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Volvo', label: 'Volvo' },
  ];

  const price = [];

  for (let value = 10; value <= 500; value += 10) {
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

      setIsFilter(true);
      dispatch(fetchFilteredCarsThunk(filters));
    } else {
      toast.error('No cars found');
    }

    setSelectedCar(null);
    setSelectedPrice(null);
    setMileageFrom('');
    setMileageTo('');
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
      className="block md:flex flex-row md:justify-center items-end gap-[15px] md:gap-[18px] mb-[50px]"
    >
      <div className="w-[180px] md:w-[250px] lg:w-[224px] rounded-[14px] mb-[10px] md:mb-0">
        <label className="label">
          <span className="label-text">Car brand</span>
        </label>
        <Select
          styles={customStyle}
          placeholder="Enter the text"
          options={make}
          onChange={option => setSelectedCar(option)}
          value={selectedCar}
          isClearable={true}
        />
      </div>
      <div className="max-w-[125px] w-full mb-[10px] md:mb-0">
        <label className="label">
          <span className="label-text">Price/ 1 hour</span>
        </label>
        <Select
          styles={customStyle}
          value={selectedPrice}
          onChange={option => setSelectedPrice(option)}
          options={price}
          placeholder="To $"
          isClearable={true}
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Car mileage/ km</span>
        </label>
        <div className="flex mb-4 md:mb-0">
          <input
            value={mileageFrom}
            className="w-[100px] md:w-[100px] lg:w-[160px] h-12 bg-slate-50 border-r-[1px] border-border rounded-l-[14px] px-[20px]"
            type="number"
            placeholder="From"
            onChange={e => setMileageFrom(e.target.value)}
          />
          <input
            value={mileageTo}
            className="w-[100px] md:w-[100px] lg:w-[160px] bg-slate-50 h-12 rounded-r-[14px] px-[20px] "
            type="number"
            placeholder="To"
            onChange={e => setMileageTo(e.target.value)}
          />
        </div>
      </div>
      <button className="flex justify-center items-center w-[136px] h-[48px] rounded-[12px] py-[14px] px-[44px] bg-blue-600 text-white font-medium text-lg hover:bg-blue-800 transition-colors text-[14px] ">
        Search
      </button>
    </form>
  );
};

export default Filter;
