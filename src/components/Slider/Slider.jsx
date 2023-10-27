import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import logo from '../../images/logo.png';

const Slider = ({ cars }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-[400px] h-[250px] rounded-[20px]"
    >
      {cars.map((car, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full flex items-center justify-center"
            src={car.img}
            alt={car.make}
            onError={e => {
              e.currentTarget.src = logo;
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
