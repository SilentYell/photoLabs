import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  return (
    <div className="App">
      <TopNavigationBar favoritePhotos={favoritePhotos} />
      <PhotoList />
    </div>
  );
};

export default App;