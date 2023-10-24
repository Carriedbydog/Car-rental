import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const TestNavbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-blue drawer-button">
          <FiMenu style={{ width: '32px', height: '32px' }} />
        </label>
      </div>

      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
          <li>
            <NavLink to="/" className="block p-4 hover:text-teal">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className="block p-4 hover:text-teal">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="block p-4 hover:text-teal">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestNavbar;
