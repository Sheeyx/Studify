import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Modal, Box } from '@mui/material';
import "./styles.scss";
import ResultService, { Result } from '../../../../../services/ResultService';
import { serverApi } from '../../../../../libs/types/config';

const ResultsSwiper = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      const resultService = new ResultService();
      try {
        const resultsData = await resultService.getAllResults();
        setResults(resultsData);
      } catch (error) {
        console.error("Error fetching results:", error);
        setError("Failed to load results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!results.length) {
    return <div className="no-data-message">No Data found !</div>;
  }

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
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {results.map((result) => (
          <SwiperSlide key={result._id} className='swiper-slide'>
            <div className="box" onClick={() => handleImageClick(`${serverApi}/${result.resultImages}`)}>
              <img src={`${serverApi}/${result.resultImages}`} alt={`Result ${result._id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for Image Preview */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 8,
            p: 0,
            outline: 'none',
          }}
        >
          <img src={selectedImage || ""} alt="Selected Result" style={{ maxWidth: '100%', maxHeight: '90vh' }} />
        </Box>
      </Modal>
    </div>
  );
};

export default ResultsSwiper;
