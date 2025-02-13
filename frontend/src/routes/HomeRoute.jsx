import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ 
  photos, 
  topics, 
  onPhotoClick, 
  favoritePhotos, 
  toggleFavorite, 
  onTopicSelect // new prop added
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favoritePhotos={favoritePhotos} 
        onTopicSelect={onTopicSelect}  // pass the handler down
      />
      <PhotoList 
        photos={photos} 
        toggleFavorite={toggleFavorite}
        favorites={favoritePhotos}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;