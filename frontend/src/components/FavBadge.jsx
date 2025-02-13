import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ count }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={count > 0} />
      {count > 0 && 
        <div className='fav-badge__count'>
          <span>{count}</span>
        </div>
      }
    </div>
  );
};

export default FavBadge;