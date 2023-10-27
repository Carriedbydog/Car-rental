import Slider from 'components/Slider/Slider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from 'redux/carRental/operations';
import { selectCars } from 'redux/carRental/selectors';
import roadForestImage from '../images/road-forest.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk(3));
  }, [dispatch]);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${roadForestImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col gap-[20px] justify-center items-center">
            {/* <h1 className="text-4xl font-bold text-center mt-8">Car Rental</h1> */}
            <div className="w-[1000px] ">
              <Slider cars={cars} />
            </div>
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-slate-200">
                Welcome to the RENTIFY
              </h1>
              <p className="mb-5 text-slate-200">
                Discover the art of effortless travel with our car rental
                service. From city escapes to scenic road trips, we provide the
                keys to your next adventure. Rent with ease and explore with
                freedom.
              </p>
              <h2 className="mb-[3px] text-slate-200 font-bold">
                You can see more of our cars in our catalog
              </h2>
              <button className="btn btn-primary">
                <NavLink to="/catalog">Get Started</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
