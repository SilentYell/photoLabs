import { useReducer, useEffect } from 'react';
import photosData from '../mocks/photos';
import topicsData from '../mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload.photos };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload.topics };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return { ...state, selectedPhoto: null };
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload.id]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id)
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    selectedPhoto: null,
    favoritePhotos: []
  });

  // Load initial data from mocks (or an API)
  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_PHOTO_DATA,
      payload: { photos: photosData }
    });

    dispatch({
      type: ACTIONS.SET_TOPIC_DATA,
      payload: { topics: topicsData }
    });
  }, []);

  // When a photo is selected in the UI (for modal view)
  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { photo }
    });
  };

  // Toggle favorite photos by dispatching an "add" or "remove" action
  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: { id: photoId }
      });
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: { id: photoId }
      });
    }
  };

  // Close the modal by deselecting the current photo
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  // If you need to load topics separately
  const onLoadTopic = (topics) => {
    dispatch({
      type: ACTIONS.SET_TOPIC_DATA,
      payload: { topics }
    });
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