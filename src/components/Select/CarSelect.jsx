import React from 'react';
import Select from 'react-select';

const CarSelect = ({ selectedCar, setSelectedCar }) => {
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

  const handleCarChange = option => {
    setSelectedCar(option.value === 'all' ? null : option.value);
  };

  return (
    <div className="form-control w-full max-w-[224px]">
      <label className="label">
        <span className="label-text">Car brand</span>
      </label>
      <Select
        placeholder="Enter the text"
        options={onCarChange}
        onChange={handleCarChange}
        value={onCarChange.find(option => option.value === selectedCar)}
      />
    </div>
  );
};

export default CarSelect;
