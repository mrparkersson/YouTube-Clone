import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => {
        return (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channel={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
