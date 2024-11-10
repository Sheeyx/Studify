import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import image1 from '../../../../../assets/uni-photo.jpeg';
import "./styles.scss";

const ResultsSwiper = () => {
  const images = [
    image1, image1, image1, image1,
    image1, image1, image1, image1,
    image1, image1, image1, image1,
  ];

  return (
    <div className="results-swiper">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          320: {            // For very small screens
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {            // For small screens
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {            // For tablets
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {           // For desktops
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='box'>
                <img src={image} alt={`Slide ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResultsSwiper;
