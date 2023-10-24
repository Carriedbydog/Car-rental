import { LearnMore } from 'components/LearnMore/LearnMore';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { Heart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/carRental/selectors';

const CarItem = ({ car, handleAddToFav }) => {
  const favoriteCars = useSelector(selectFavorites);
  const { open, close, isOpen } = useModal();
  const town = car.address ? car.address.split(',')[1].trim() : '';
  const isFav = favoriteCars.some(fav => fav.id === car.id);

  return (
    <li className="relative max-w-[275px] h-[440px] shadow-md rounded-lg flex flex-col">
      <img
        src={car.img || 'https://demofree.sirv.com/nope-not-here.jpg'}
        alt={car.model}
        className=" rounded-lg object-cover mb-[14px] h-[280px] transition-transform duration-1000 hover:scale-110 "
      />
      <button
        onClick={() => handleAddToFav(car.id, isFav)}
        className="absolute top-5 right-5 p-0 border-none bg-transparent"
      >
        <Heart
          size={20}
          fill={isFav ? '#3470FF' : 'none'}
          color={isFav ? '#3470FF' : 'white'}
        />
      </button>
      <div className="p-5 ">
        <div className="flex justify-between items-baseline mb-[8px]">
          <h4 className="font-semibold text-[16px] text-gray-900">
            {car.make} <span className="text-blue-700">{car.model},</span>{' '}
            {car.year}
          </h4>
          <h4 className="text-[16px]">{car.rentalPrice}</h4>
        </div>
        <div className="mb-[28px]">
          <p className="text-gray-500 text-[12px] font-normal">
            {town} | Ukraine | {car.rentalCompany} | {car.type} | {car.make} |{' '}
            {car.mileage} | {car.accessories ? car.accessories[1] : ''}
          </p>
        </div>
        <div className="flex flex-grow items-end">
          <button
            onClick={() => open(car)}
            className="flex flex-grow justify-center rounded-lg bg-blue-500 p-3 text-white font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            Learn more
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal close={close}>
          <LearnMore car={car} close={close} />
        </Modal>
      )}
    </li>
  );
};

export default CarItem;
