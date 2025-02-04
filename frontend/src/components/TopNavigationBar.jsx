import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favoritePhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__content">
        <TopicList />
        <FavBadge isFavPhotoExist={favoritePhotos.length > 0} />
      </div>
    </div>
  );
};

export default TopNavigationBar;