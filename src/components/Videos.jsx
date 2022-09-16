import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos }) => {
  return (
    <div>
      {videos.map((video, index) => {
        return (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channel={video} />}
          </Box>
        );
      })}
    </div>
  );
};

export default Videos;
