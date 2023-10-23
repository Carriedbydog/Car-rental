import React, { useState } from 'react';

const MileageRange = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = event => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = event => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Car mileage/km</span>
      </label>
      <div className="flex">
        <input
          className="input input-bordered w-full max-w-xs  bg-slate-50"
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          placeholder="From"
        />
        <input
          className="input input-bordered w-full max-w-xs  bg-slate-50"
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default MileageRange;
