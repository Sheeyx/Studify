import { Box, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface VideoCardProps {
  name: string;
  university: string;
  videoUrl: string;       // YouTube URL (watch/shorts/youtu.be)
  description?: string;   // make optional
  showDescription?: boolean; // NEW: default false
}

const VideoCard: React.FC<VideoCardProps> = ({
  name,
  university,
  videoUrl,
  description,
  showDescription = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getEmbedUrl = (url: string): string => {
    const m = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^?&/]+)/,
    );
    const id = m ? m[1] : "";
    return id
      ? `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1`
      : url;
  };

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    iframeRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );
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
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={getEmbedUrl(videoUrl)}
          title={name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '20px' }}
        />
        {!isPlaying && (
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
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
        {/* University shown; remove this block too if you don't want it */}
        {/* <Typography variant="body2" color="text.secondary">{university}</Typography> */}

        {/* Hidden by default */}
        {showDescription && !!description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default VideoCard;
