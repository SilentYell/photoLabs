import { useReducer, useEffect } from 'react';

/*
  ACTIONS: Constants representing the various actions that can be dispatched.
  These constants help avoid typos and provide a single source of truth for action types.
*/
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

/*
  reducer: A function that receives the current state and an action, and returns the new state.
  This centralizes all state transitions, making it easier to manage complex state updates.
*/
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      // Sets the initial topics data
      return { ...state, topics: action.payload.topics };
    case ACTIONS.SELECT_PHOTO:
      // Updates the state with the currently selected photo (for the modal view)
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      // Closes the modal by resetting the selected photo
      return { ...state, selectedPhoto: null };
    case ACTIONS.FAV_PHOTO_ADDED:
      // Adds a photo id to the list of favorite photos
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload.id]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      // Removes a photo id from the list of favorite photos
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id)
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

/*
  useApplicationData: Custom hook that manages the application state using the useReducer Hook.
  
  It returns an object containing:
  - state: The current state of the application.
  - onPhotoSelect: Function to set a photo as selected (e.g., when opening the modal).
  - updateToFavPhotoIds: Function to toggle a photo in the favorites list.
  - onClosePhotoDetailsModal: Function to close the photo details modal.
  - onLoadTopic: Function to update the topics data (if needed).
*/
const useApplicationData = () => {
  // Initialize state using useReducer with the reducer defined above
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    selectedPhoto: null,
    favoritePhotos: []
  });

  /*
    useEffect: Loads initial data into the state when the component mounts.
    Dispatches actions to set the photo and topic data.
  */
  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } });
      });
  }, []);

  /*
    onPhotoSelect: Handler used when a user selects a photo.
    Dispatches a SELECT_PHOTO action to update the state with the selected photo.
  */
  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { photo }
    });
  };

  /*
    updateToFavPhotoIds: Handler used to toggle the favorite status of a photo.
    If the photo is already favorited, it dispatches an action to remove it; otherwise, it adds it.
  */
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

  /*
    onClosePhotoDetailsModal: Handler used to close the photo details modal.
    Resets the selectedPhoto in the state.
  */
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  /*
    onLoadTopic: Handler used to update the topics data.
    Useful if you load topics separately from the initial load.
  */
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