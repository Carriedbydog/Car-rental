import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const UptoTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button className="flex justify-center items-center fixed py-4 px-1 opacity-1 bottom-10 right-6 h-[20px] font-normal z-100 cursor-pointer transition-transform duration-1000 ">
      <ArrowUp
        size={32}
        color="#0f0f0f"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline-block' : 'none' }}
      />
    </button>
  );
};
