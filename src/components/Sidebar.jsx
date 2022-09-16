import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCat, setSelectedCat }) => {
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
            background: category.name === selectedCat && '#FC1503',
            color: 'white',
          }}
          onClick={() => setSelectedCat(category.name)}
          key={index}
        >
          <span
            style={{
              color: category.name === selectedCat ? 'white' : 'red',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCat ? '1' : '0.8' }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
