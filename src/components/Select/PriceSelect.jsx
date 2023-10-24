import React from 'react';

const PriceSelect = () => {
  return (
    <div className="form-control w-full max-w-[125px]">
      <label className="label">
        <span className="label-text">Price/ 1 hour</span>
      </label>
      <select className="select select-bordered bg-slate-50">
        <option disabled>To $</option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </div>
  );
};

export default PriceSelect;
