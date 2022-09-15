import axios from 'axios';
import 'dotenv/config';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchData = async (url) => {
  await axios.get(`${BASE_URL}/${url}`);
};
