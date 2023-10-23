import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = event => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);

  return (
    <nav className="relative">
      <button
        className="cursor-pointer bg-transparent border-none text-2xl"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <MdClose style={{ width: '32px', height: '32px' }} />
        ) : (
          <FiMenu style={{ width: '32px', height: '32px' }} />
        )}
      </button>
      <ul
        className={`list-none absolute bg-whitesmoke top-10 w-200px text-2xl shadow-md transition-transform duration-200 ${
          navbarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
        ref={ref}
      >
        <li>
          <NavLink
            to="/"
            className="block p-4 hover:text-teal"
            onClick={() => setNavbarOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className="block p-4 hover:text-teal"
            onClick={() => setNavbarOpen(false)}
          >
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="block p-4 hover:text-teal"
            onClick={() => setNavbarOpen(false)}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
