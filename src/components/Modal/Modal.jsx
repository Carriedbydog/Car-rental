import { X } from 'lucide-react';
import React from 'react';

export const Modal = ({ car, close, children }) => {
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return (
    <div
      className="inset-0 fixed flex justify-center items-center bg-black/50 z-50 "
      onClick={handleBackDropClick}
    >
      <div className="border py-0 md:py-[40px] px-0 md:px-[40px] relative bg-white rounded-xl w-[320px] md:w-auto h-[660px] md:h-auto overflow-y-auto md:overflow-hidden overflow-x-hidden">
        <button className=" absolute top-3 right-3" onClick={close}>
          <X color="#0f0f0f" />
        </button>
        {children}
      </div>
    </div>
  );
};
