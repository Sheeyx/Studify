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
            <div className="box-img">
              <img src={`${serverApi}/${image}`} alt={`Slide ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerCarousel;
