import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favoritePhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__content">
        <TopicList topics={topics} />
        <div className="top-nav-bar__fav-badge">
          <FavBadge isFavPhotoExist={favoritePhotos.length > 0} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;