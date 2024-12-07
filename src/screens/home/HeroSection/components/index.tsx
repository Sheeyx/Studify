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
    <div className="results-swiper">
      <div className="carousel-container">
        <Swiper
          spaceBetween={20}         // Space between images for a cleaner look
          loop={true}               // Enables infinite loop
          modules={[Autoplay]}      // Pass the Autoplay module
          autoplay={{
            delay: 3000,            // 3 seconds delay between transitions
            disableOnInteraction: false, // Continue autoplay even after interaction
          }}
          speed={1500}              // Smooth transition speed (1.5 seconds)
          slidesPerView={1}         // Show only one slide at a time
          centeredSlides={false}    // No centering to allow natural slide behavior
          breakpoints={{
            320: {
              slidesPerView: 1,     // 1 slide on extra small screens
            },
            640: {
              slidesPerView: 2,     // 2 slides on small screens
            },
            768: {
              slidesPerView: 3,     // 3 slides on medium screens
            },
            1260: {
              slidesPerView: 4,     // 4 slides on large screens and above
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
