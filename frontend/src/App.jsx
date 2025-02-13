import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onTopicSelect
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos}
        topics={state.topics}
        onPhotoClick={onPhotoSelect}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={updateToFavPhotoIds}
        onTopicSelect={onTopicSelect}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal 
          onClose={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          favoritePhotos={state.favoritePhotos}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;