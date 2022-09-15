import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Sidebar, Videos } from '../components';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar />
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
          New <span style={{ color: '#f31503' }}>videos</span>
        </Typography>
      </Box>
      <Videos videos={[]} />
    </Stack>
  );
};

export default Feed;
