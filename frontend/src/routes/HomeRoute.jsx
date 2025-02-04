import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavoritePhoto = (photoId) => {
    setFavoritePhotos(prev => {
      if (prev.includes(photoId)) {
        return prev.filter(id => id !== photoId);
      }
      return [...prev, photoId];
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favoritePhotos={favoritePhotos} 
      />
      <PhotoList 
        photos={photos} 
        toggleFavorite={toggleFavoritePhoto}
        favorites={favoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;