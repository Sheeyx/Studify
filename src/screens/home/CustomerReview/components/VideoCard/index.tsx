import { Box, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface VideoCardProps {
    name: string;
    university: string;
    videoUrl: string; // YouTube watch URL (e.g., https://www.youtube.com/watch?v=K1QYAoCnfeQ or shortened URL)
    description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ name, university, videoUrl, description }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const getEmbedUrl = (url: string): string => {
        // Updated regex to match both standard and shortened YouTube URLs
        const videoIdMatch = url.match(
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^?&]+)/
        );
        return videoIdMatch
            ? `https://www.youtube.com/embed/${videoIdMatch[1]}?enablejsapi=1`
            : url;
    };

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                '*'
            );
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
                    src={getEmbedUrl(videoUrl)} // Embed URL
                    title={name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        borderRadius: '20px',
                    }}
                />
                {/* Play button overlay */}
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
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default VideoCard;
