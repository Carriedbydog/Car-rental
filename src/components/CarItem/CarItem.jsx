import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavoritesThunk } from 'redux/carRental/operations';
import { Heart } from 'lucide-react';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const handleAddToFav = id => {
    dispatch(addToFavoritesThunk(id));
  };

  const splitAddress = car.address.split(',');
  const town = splitAddress[1].trim();

  return (
    <li className="relative max-w-[275px] h-[440px] shadow-md rounded-lg flex flex-col">
      <img
        src={car.img || 'https://demofree.sirv.com/nope-not-here.jpg'}
        alt={car.model}
        className=" rounded-lg object-cover mb-[14px] h-[280px] transition-transform duration-1000 hover:scale-110 "
      />
      <button
        onClick={() => handleAddToFav(car.id)}
        className="absolute top-5 right-5 p-0 border-none bg-transparent"
      >
        <Heart size={20} color="#ffffff" />
      </button>
      <div className="p-5 ">
        <div className="flex justify-between items-baseline mb-[8px]">
          <h4 className="font-semibold text-[16px] text-gray-900">
            {car.make} <span className="text-blue-700">{car.model},</span>{' '}
            {car.year}
          </h4>
          <h4 className="text-[16px]">{car.rentalPrice}</h4>
        </div>
        <div className="mb-[28px]">
          <p className="text-gray-500 text-[12px] font-normal">
            {town} | Ukraine | {car.rentalCompany} | {car.type} | {car.make} |{' '}
            {car.mileage} | {car.accessories[1]}
          </p>
        </div>
        <div className="flex flex-grow items-end">
          <button className="flex flex-grow justify-center rounded-lg bg-blue-700 p-3 text-white font-semibold text-lg hover:bg-blue-800 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </li>
  );
};

export default CarItem;
