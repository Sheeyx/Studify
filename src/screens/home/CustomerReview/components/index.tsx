import React, { useRef, useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface VideoCardProps {
  name: string;
  university: string;
  videoUrl: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ name, university, videoUrl, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  return (
    <Box sx={{ maxWidth: { xs: '100%', sm: 345, md: 365 }, margin: '0 auto' }}>
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: 345 },
          height: { xs: 240, sm: 320, md: 480 },
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        {/* YouTube iframe */}
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`${videoUrl}?enablejsapi=1`}
          title={name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: '20px',
          }}
        />
        {/* Play button overlay, hidden when video is playing */}
        {!isPlaying && (
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: 80,
            }}
            onClick={handlePlayButtonClick}
            aria-label="play video"
          >
            <PlayCircleIcon sx={{ fontSize: 80 }} />
          </IconButton>
        )}
      </Box>
      <Box mt={2} textAlign="center">
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {university}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const videoData = [
  {
    name: 'Olivia Harrison',
    university: 'Student of Yale University',
    videoUrl: 'https://www.youtube.com/embed/VTsGRGeBj98',
    description: '',
  },
  {
    name: 'Isabella Davenport',
    university: 'Student of Yonsei University',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '',
  },
  {
    name: 'Henry Lancaster',
    university: 'Winner of National Scholarship',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '',
  },
];

const VideoCardList: React.FC = () => {
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
