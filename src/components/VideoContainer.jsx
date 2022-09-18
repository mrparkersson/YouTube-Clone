import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchData } from '../utils/getDataFromApi';

const VideoContainer = () => {
  const [video, setVideo] = useState(null);
  const [populatedVideos, setPopulatedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data?.items[0])
    );

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setPopulatedVideos(data.items)
    );
  }, [id]);

  if (!video?.snippet) return 'Loading...';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;

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
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItemns="center">
                <Typography variant="body1" sx={{ opacity: '0.7' }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: '0.7' }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={populatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoContainer;
