import React from 'react';

export const LearnMore = ({ car }) => {
  const town = car.address ? car.address.split(',')[1].trim() : '';
  return (
    <>
      <img
        src={car.img || 'https://demofree.sirv.com/nope-not-here.jpg'}
        alt={car.model}
        className=" rounded-lg object-cover mb-[14px] w-[470px] h-[315px]"
      />
      <div className="w-[460px] ">
        <div className="mb-[24px]">
          <div className="w-[277px] mb-[14px]">
            <div className="flex justify-between items-baseline mb-[8px]">
              <h3 className="font-semibold text-[18px] text-gray-900 leading-[24px]">
                {car.make} <span className="text-blue-700">{car.model},</span>{' '}
                {car.year}
              </h3>
            </div>
            <div className="">
              <p className="text-gray-600 text-[12px] font-normal leading-[18px]">
                {town} | Ukraine | Id: {car.id} | Year: {car.year} | Type:{' '}
                {car.type} | Fuel Consumption: {car.fuelConsumption} | Engine
                Size: {car.engineSize}
              </p>
            </div>
          </div>
          <p className="leading-[20px] font-normal text-black text-[14px]">
            {car.description}
          </p>
        </div>
        <div className="mb-[24px]">
          <h3 className="mb-[8px] leading-[20px] font-semibold text-black text-[14px]">
            Accessories and functionalities:
          </h3>
          <div className="flex flex-wrap">
            {car.accessories &&
              car.accessories.map((acc, idx) => (
                <p
                  key={idx}
                  className="text-gray-600 text-[12px] font-normal leading-[18px]"
                >
                  {acc}
                </p>
              ))}
            {car.functionalities &&
              car.functionalities.map((func, idx) => (
                <p
                  key={idx}
                  className="text-gray-600 text-[12px] font-normal leading-[18px]"
                >
                  {func}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-[24px]">
          <h3 className="mb-[8px] leading-[20px] font-semibold text-black text-[14px]">
            Rental Conditions:
          </h3>
          <div className="flex gap-[8px]">
            <p className="text-gray-500 text-[12px] font-normal">
              {car.rentalConditions.split('')}
            </p>
            <p className="text-gray-500 text-[12px] font-normal">
              {car.mileage}
            </p>
            <p className="text-gray-500 text-[12px] font-normal">
              {car.rentalPrice}
            </p>
          </div>
        </div>
        <button className="flex justify-center items-center  rounded-[12px] py-[14px] px-[50px] bg-blue-600 text-white font-medium text-lg hover:bg-blue-800 transition-colors text-[14px]">
          <a href="tel:+380730000000">Rental car</a>
        </button>
      </div>
    </>
  );
};
