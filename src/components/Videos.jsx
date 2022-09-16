import React from 'react';

const Videos = ({ videos }) => {
  return (
    <div>
      {videos.map((video, index) => {
        return <img key={index} src={video.thumbnail} alt="" />;
      })}
    </div>
  );
};

export default Videos;
