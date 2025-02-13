import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import LikedPhotosModal from './routes/LikedPhotosModal';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onTopicSelect
  } = useApplicationData();

  const [showLikedPhotos, setShowLikedPhotos] = useState(false);

  const toggleLikedPhotos = () => {
    setShowLikedPhotos(!showLikedPhotos);
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos}
        topics={state.topics}
        onPhotoClick={onPhotoSelect}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={updateToFavPhotoIds}
        onTopicSelect={onTopicSelect}
        toggleLikedPhotos={toggleLikedPhotos}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal 
          onClose={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          favoritePhotos={state.favoritePhotos}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
      {showLikedPhotos && (
        <LikedPhotosModal 
          likedPhotos={state.photos.filter(photo => state.favoritePhotos.includes(photo.id))}
          onClose={toggleLikedPhotos}
        />
      )}
    </div>
  );
};

export default App;