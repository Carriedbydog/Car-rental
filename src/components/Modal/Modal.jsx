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
      className="inset-0 fixed flex justify-center items-center bg-black/50 z-50"
      onClick={handleBackDropClick}
    >
      <div className="border py-[40px] px-[40px] relative bg-white rounded-xl ">
        <button className=" absolute top-3 right-3" onClick={close}>
          <X color="#0f0f0f" />
        </button>
        {children}
      </div>
    </div>
  );
};
