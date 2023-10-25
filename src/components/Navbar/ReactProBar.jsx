import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper for React
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

const ReactProBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="h-screen bg-gray-200 font-sans">
      <Swiper
        className="swiper h-full"
        slidesPerView="auto"
        initialSlide={isMenuOpen ? 1 : 0}
        resistanceRatio={0}
        slideToClickedSlide
      >
        <SwiperSlide className={`menu ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* <button className="menu-button" >
            CLICK
          </button> */}
          <div className="drawer-content" onClick={toggleMenu}>
            <label htmlFor="my-drawer" className="btn btn-blue drawer-button">
              <FiMenu style={{ width: '32px', height: '32px' }} />
            </label>
          </div>
          {/* <div className="menu-button" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div> */}
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <a href="/" className="block p-4 hover:text-teal">
                Home
              </a>
            </li>
            <li>
              <a href="/catalog" className="block p-4 hover:text-teal">
                Catalog
              </a>
            </li>
            <li>
              <a href="/favorites" className="block p-4 hover:text-teal">
                Favorites
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="content">KONT</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReactProBar;
