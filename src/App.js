import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoContainer,
  Search,
} from './components';

const App = () => (
  <Router className="App">
    <Box bgcolor="#000">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoContainer />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" exact element={<Search />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
