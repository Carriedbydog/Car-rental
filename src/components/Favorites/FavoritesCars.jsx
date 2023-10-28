import CarItem from 'components/CarItem/CarItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectFavorites } from 'redux/carRental/selectors';
import { deleteFromFav } from 'redux/carRental/slice';

const FavoritesCars = () => {
  const favoriteCars = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleDeleteFromFav = id => {
    dispatch(deleteFromFav(id));
    toast.info('Car was deleted from favorites');
  };

  return (
    <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)] min-h-screen pb-[20px]">
      <h1 className="rounded-[32px] py-[7px] px-[14px] bg-slate-50 mb-[20px] text-center font-bold text-slate-700">
        Favorite Cars
      </h1>
      {favoriteCars.length !== 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {favoriteCars?.map(car => {
            return (
              <CarItem
                key={car.id}
                car={car}
                handleAddToFav={handleDeleteFromFav}
              />
            );
          })}
        </ul>
      ) : (
        <div className="flex flex-col justify-center items-center h-1/2 ">
          <h1 className="text-xl font-bold ">
            You don't have any cars in a favorite list
          </h1>
          <p className="text-l font-semibold">
            You can add them from our{' '}
            <span className="text-blue-500 text-xl font-semibold hover:text-blue-700">
              <Link to="/catalog">Catalog </Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesCars;
