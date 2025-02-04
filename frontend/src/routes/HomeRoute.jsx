import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar favoritePhotos={favoritePhotos} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;