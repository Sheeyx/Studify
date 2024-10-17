import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Correct CSS imports for Swiper
import 'swiper/css';  // Core Swiper styles
import 'swiper/css/autoplay';  // Styles for the Autoplay module
import { Autoplay } from 'swiper/modules';  // Import the Autoplay module
import image1 from '../../../../../assets/uni-photo.jpeg';  // Import the image
import "./styles.scss";

const ResultsSwiper = () => {
  const images = [
    image1, image1, image1, image1,
    image1, image1, image1, image1,
    image1, image1, image1, image1,
  ]; // Array of images

  return (
    <div className="results-swiper">
      <Swiper
        spaceBetween={30}       // Space between images
        slidesPerView={4}       // Show 4 images at a time
        slidesPerGroup={1}      // Move one image at a time
        loop={true}             // Enables infinite loop
        modules={[Autoplay]}    // Pass the Autoplay module
        autoplay={{
          delay: 3000,          // Transition every 3 seconds
          disableOnInteraction: false,
        }}
        speed={800}             // Speed of the transition in ms
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='box'>
                <img src={image} alt={`Slide ${index}`}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResultsSwiper;
