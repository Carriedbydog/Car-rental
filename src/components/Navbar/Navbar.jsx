import { useSidebar } from 'components/Сontext/Context';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <div className={`drawer ${sidebarOpen ? 'w-60' : 'w-0'}`}>
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle "
          onClick={toggleSidebar}
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-blue drawer-button transition-transform duration-300"
            style={{
              transform: `translateX(${sidebarOpen ? '240px' : '0'})`,
            }}
          >
            {sidebarOpen ? (
              <MdClose style={{ width: '32px', height: '32px' }} />
            ) : (
              <FiMenu style={{ width: '32px', height: '32px' }} />
            )}
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60  min-h-full bg-base-200 text-base-content ">
            <img src={logo} alt="logo" />
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
    </>
  );
};

export default Navbar;
