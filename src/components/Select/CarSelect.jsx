import React from 'react';

const CarSelect = () => {
  return (
    <div className="form-control w-full max-w-[224px]">
      <label className="label">
        <span className="label-text">Car brand</span>
      </label>
      <select className="select select-bordered  bg-slate-50">
        <option disabled>Enter the text</option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </div>
  );
};

export default CarSelect;
