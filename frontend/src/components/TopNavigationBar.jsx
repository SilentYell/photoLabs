import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favoritePhotos, onTopicSelect, toggleLikedPhotos }) => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__content">
        <TopicList topics={topics} onTopicSelect={onTopicSelect} />
        <div className="top-nav-bar__fav-badge" onClick={toggleLikedPhotos}>
          <FavBadge count={favoritePhotos.length} />
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;