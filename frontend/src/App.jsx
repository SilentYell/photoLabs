import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavoritePhoto = (photoId) => {
    setFavoritePhotos(prev => {
      if (prev.includes(photoId)) {
        return prev.filter(id => id !== photoId);
      }
      return [...prev, photoId];
    });
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        onPhotoClick={handlePhotoClick}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavoritePhoto}
      />
      {showModal && (
        <PhotoDetailsModal 
          onClose={handleCloseModal} 
          selectedPhoto={selectedPhoto}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavoritePhoto}
        />
      )}
    </div>
  );
};

export default App;