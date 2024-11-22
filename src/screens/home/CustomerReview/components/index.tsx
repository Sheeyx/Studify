import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import VideoCard from './VideoCard';
import CustomerService from '../../../../services/CustomerSevice';

// Define the type for the video data
interface Video {
  name: string;
  university: string;
  videoUrl: string;
  description: string;
}

const VideoCardList: React.FC = () => {
  // Set the correct type for videoData
  const [videoData, setVideoData] = useState<Video[]>([]);
  const customerService = new CustomerService();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customers = await customerService.getCustomers();
        const mappedData = customers.map((customer) => ({
          name: customer.name,
          university: customer.role, // Assuming 'role' represents university
          videoUrl: customer.video || '', // Default empty if video is missing
          description: customer.description || '',
        }));
        setVideoData(mappedData);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: { xs: 2, sm: 3 },
        flexWrap: 'wrap',
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {videoData.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </Box>
  );
};

export default VideoCardList;
