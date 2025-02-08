import { useState, useEffect } from 'react';
import photosData from '../mocks/photos';
import topicsData from '../mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],
    topics: [],
    selectedPhoto: null,
    favoritePhotos: []
  });

  // Load initial data (from mocks or an API)
  useEffect(() => {
    setState(prev => ({
      ...prev,
      photos: photosData,
      topics: topicsData
    }));
  }, []);

  // When a photo is selected in the UI (for modal view)
  const onPhotoSelect = (photo) => {
    setState(prev => ({
      ...prev,
      selectedPhoto: photo
    }));
  };

  // Update the state for favorite photos
  const updateToFavPhotoIds = (photoId) => {
    setState(prev => {
      const isFav = prev.favoritePhotos.includes(photoId);
      return {
        ...prev,
        favoritePhotos: isFav
          ? prev.favoritePhotos.filter(id => id !== photoId)
          : [...prev.favoritePhotos, photoId]
      };
    });
  };

  // Close the modal by deselecting the current photo
  const onClosePhotoDetailsModal = () => {
    setState(prev => ({
      ...prev,
      selectedPhoto: null
    }));
  };

  // If you need to load topics separately
  const onLoadTopic = (topics) => {
    setState(prev => ({
      ...prev,
      topics
    }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onLoadTopic
  };
};

export default useApplicationData;