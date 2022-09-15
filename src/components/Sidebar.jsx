import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = () => {
  const selected = 'New';
  return (
    <Stack
      direction="row"
      sx={{
        overflow: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category, index) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selected && '#FC1503',
            color: 'white',
          }}
          key={index}
        >
          <span
            style={{
              color: category.name === selected ? 'white' : 'red',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selected ? '1' : '0.8' }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
