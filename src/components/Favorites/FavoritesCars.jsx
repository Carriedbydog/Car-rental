import CarItem from 'components/CarItem/CarItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/carRental/selectors';
import { deleteFromFav } from 'redux/carRental/slice';

const FavoritesCars = () => {
  const favoriteCars = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleDeleteFromFav = id => {
    dispatch(deleteFromFav(id));
  };

  return (
    <div className="mt-16 mx-4 md:mx-auto max-w-[calc(100vw-12rem)]">
      <h1>Favorite Cars</h1>
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
    </div>
  );
};

export default FavoritesCars;