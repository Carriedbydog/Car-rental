import React from 'react';
import logo from '../../images/logo.png';

export const LearnMore = ({ car }) => {
  const town = car.address ? car.address.split(',')[1].trim() : '';
  const oldRentalConditions = car.rentalConditions;
  const newRentalConditions = oldRentalConditions.split('\n');
  const styledConditions = newRentalConditions.map((condition, index) => {
    const match = condition.match(/(\d+)/);
    if (match) {
      const age = match[0];
      const parts = condition.split(age);
      return (
        <p
          key={index}
          className="text-gray-500 text-[12px] leading-[18px] font-normal rounded-[32px] py-[7px] px-[14px] bg-slate-50"
        >
          {parts[0]}
          <span className="text-blue-500 font-bold">{age}</span>
          {parts[1]}
        </p>
      );
    } else {
      return (
        <p
          key={index}
          className="text-gray-500 text-[12px] leading-[18px] font-normal rounded-[32px] py-[7px] px-[14px] bg-slate-50"
        >
          {condition}
        </p>
      );
    }
  });

  const carMileage = car.mileage.toLocaleString('en-US');

  return (
    <>
      <img
        src={car.img || 'https://demofree.sirv.com/nope-not-here.jpg'}
        alt={car.model}
        className=" rounded-lg object-cover mb-[14px] w-[470px] h-[315px]"
        onError={e => {
          e.currentTarget.src = logo;
        }}
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
              <p className="text-gray-500 text-[12px] font-normal leading-[18px]">
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
          <div className="flex flex-wrap gap-1">
            {car.accessories &&
              car.accessories.map((acc, idx) => (
                <p
                  key={idx}
                  className="text-gray-500 text-[12px] font-normal leading-[18px]"
                >
                  {idx > 0 && ' | '}
                  {acc}
                </p>
              ))}
            {car.functionalities &&
              car.functionalities.map((func, idx) => (
                <p
                  key={idx}
                  className="text-gray-500 text-[12px] font-normal leading-[18px]"
                >
                  {idx > 0 && '  |  '}
                  {func}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-[24px]">
          <h3 className="mb-[8px] leading-[20px] font-semibold text-black text-[14px]">
            Rental Conditions:
          </h3>
          <div className="flex flex-wrap gap-[8px]">
            {styledConditions}
            <p className="text-gray-500 text-[12px] leading-[18px] font-normal rounded-[32px] py-[7px] px-[14px] bg-slate-50">
              Mileage:{' '}
              <span className="text-blue-500 font-bold">{carMileage}</span>
            </p>
            <p className="text-gray-500 text-[12px] leading-[18px] font-normal rounded-[32px] py-[7px] px-[14px] bg-slate-50">
              Price:{' '}
              <span className="text-blue-500 font-bold">{car.rentalPrice}</span>
            </p>
          </div>
        </div>

        <a
          className="  rounded-[12px] py-[14px] px-[50px] bg-blue-600 text-white font-medium text-lg hover:bg-blue-800 transition-colors text-[14px]"
          href="tel:+380730000000"
        >
          Rental car
        </a>
      </div>
    </>
  );
};
