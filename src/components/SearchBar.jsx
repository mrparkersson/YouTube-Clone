import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };
  return (
    <Paper
      component="form"
      onSubmit={onSearchSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: '5' },
      }}
    >
      <input
        type="search"
        className="search-bar"
        value={searchTerm}
        placeholder="Search..."
        onChange={searchTermHandler}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
