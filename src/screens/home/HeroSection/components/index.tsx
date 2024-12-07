import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import "./styles.scss";
import UnilogosService from "../../../../services/UniLogosService";
import { serverApi } from '../../../../libs/types/config';

const PartnerCarousel = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const unilogosService = new UnilogosService();
        const results = await unilogosService.getAllResults();
        const fetchedImages = results.map((item: { unilogosImages: string }) => item.unilogosImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="partner-carousel">
      <div className="carousel-container">
        <Swiper
          spaceBetween={20}          // Increased spacing between slides
          loop={true}                // Enables infinite loop
          modules={[Autoplay]}       // Autoplay module for smooth scrolling
          autoplay={{
            delay: 2000,             // 2 seconds delay between transitions
            disableOnInteraction: false, // Continue autoplay even after interaction
          }}
          speed={2000}               // Slower transition speed for smooth movement (2 seconds)
          slidesPerView={1}          // Start with 1 slide at a time
          breakpoints={{
            320: {
              slidesPerView: 1,      // 1 slide on extra small screens
              spaceBetween: 10,      // 10px spacing on small screens
            },
            480: {
              slidesPerView: 2,      // 2 slides on small screens
              spaceBetween: 15,      // 15px spacing
            },
            768: {
              slidesPerView: 3,      // 3 slides on medium screens
              spaceBetween: 20,      // 20px spacing
            },
            1024: {
              slidesPerView: 4,      // 4 slides on larger screens
              spaceBetween: 25,      // 25px spacing
            },
            1440: {
              slidesPerView: 5,      // 5 slides on extra-large screens
              spaceBetween: 30,      // 30px spacing
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="box-img">
                <img src={`${serverApi}/${image}`} alt={`Slide ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerCarousel;
