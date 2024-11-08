import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import image1 from '../../../../assets/hero-section/glasgow.png';
import image2 from '../../../../assets/hero-section/harvard-university.png';
import image3 from '../../../../assets/hero-section/university-sydney.png';
import "./styles.scss";

const PartnerCarousel = () => {
  const images = [
    image1, image2, image3,
    image1, image2, image3,
  ];

  return (
    <div className="results-swiper">
      <Swiper
        spaceBetween={20}       // Adjusted space between images for a smoother look
        loop={true}             // Enables infinite loop
        modules={[Autoplay]}    // Pass the Autoplay module
        autoplay={{
          delay: 0,             // No delay between transitions for continuous scroll
          disableOnInteraction: false,
        }}
        speed={5000}            // Speed of the continuous transition
        breakpoints={{
          320: {
            slidesPerView: 1,   // 1 slide on extra small screens
          },
          640: {
            slidesPerView: 2,   // 2 slides on small screens
          },
          768: {
            slidesPerView: 3,   // 3 slides on medium screensd
          },
          1024: {
            slidesPerView: 4,   // 4 slides on large screens and above
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="box">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerCarousel;
