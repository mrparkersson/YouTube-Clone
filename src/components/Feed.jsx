import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Sidebar, Videos } from '../components';
import { fetchData } from '../utils/getDataFromApi';
const Feed = () => {
  const [selectedCat, setSelectedCat] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCat}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCat]);
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#ffff' }}
        >
          Copyright 2022 Mr Parker's Son
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCat}
          <span style={{ color: '#f31503' }}>videos</span>
        </Typography>
      </Box>
      <Videos videos={videos} />
    </Stack>
  );
};

export default Feed;
