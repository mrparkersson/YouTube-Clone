import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { Video } from './';
import { fetchData } from '../utils/getDataFromApi';

const VideoContainer = () => {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data?.items[0])
    );
  }, [id]);

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography variant="h5" color="#fff" fontWeight="bold" p={2}>
              {video?.snippet?.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoContainer;
