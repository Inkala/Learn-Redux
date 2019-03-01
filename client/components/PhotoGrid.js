import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
  return (
    <pre>
      <div className='photo-grid'>
        {props.posts.map((post, i) => (
          <Photo {...props} key={i} />
        ))}
      </div>
    </pre>
  );
};

export default PhotoGrid;
