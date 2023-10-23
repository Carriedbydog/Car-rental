import React from 'react';

import PriceSelect from './PriceSelect';
import MileageRange from './MileageRange/MileageRange';
import CarSelect from './CarSelect';

const CatalogSelects = () => {
  return (
    <form className="flex items-end justify-center gap-[18px]">
      <CarSelect />
      <PriceSelect />
      <MileageRange />
      <button className="flex justify-center items-center w-[136px] h-[48px] rounded-[12px] py-[14px] px-[44px] bg-blue-600 text-white font-medium text-lg hover:bg-blue-800 transition-colors text-[14px]">
        Search
      </button>
    </form>
  );
};

export default CatalogSelects;
