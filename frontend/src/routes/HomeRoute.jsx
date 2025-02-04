import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar favoritePhotos={favoritePhotos} />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
