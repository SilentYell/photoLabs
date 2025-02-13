import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

// Helper functions for reducer actions
const setPhotoData = (state, action) => ({ ...state, photos: action.payload });
const setTopicData = (state, action) => ({ ...state, topics: action.payload.topics });
const selectPhoto = (state, action) => ({ ...state, selectedPhoto: action.payload.photo });
const closePhotoDetailsModal = (state) => ({ ...state, selectedPhoto: null });
const addFavoritePhoto = (state, action) => ({
  ...state,
  favoritePhotos: [...state.favoritePhotos, action.payload.id]
});
const removeFavoritePhoto = (state, action) => ({
  ...state,
  favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id)
});

// Reducer splitting into helper functions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return setPhotoData(state, action);
    case ACTIONS.SET_TOPIC_DATA:
      return setTopicData(state, action);
    case ACTIONS.SELECT_PHOTO:
      return selectPhoto(state, action);
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return closePhotoDetailsModal(state);
    case ACTIONS.FAV_PHOTO_ADDED:
      return addFavoritePhoto(state, action);
    case ACTIONS.FAV_PHOTO_REMOVED:
      return removeFavoritePhoto(state, action);
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    selectedPhoto: null,
    favoritePhotos: []
  });

  // Fetch all photos on mount with error handling
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then(response => response.json())
      .then(data =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      )
      .catch(error => console.error("Error fetching photos:", error));
  }, []);

  // Fetch topics on mount with error handling
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then(response => response.json())
      .then(data =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } })
      )
      .catch(error => console.error("Error fetching topics:", error));
  }, []);

  // Fetch photos for a selected topic
  const onTopicSelect = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      )
      .catch(error => console.error("Error fetching photos by topic:", error));
  };

  // Handlers
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  const onLoadTopic = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onLoadTopic,
    onTopicSelect  // Expose the new topic handler
  };
};

export default useApplicationData;