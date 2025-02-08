import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, selectedPhoto, favoritePhotos, toggleFavorite }) => {
  if (!selectedPhoto) return null;

  // Convert similar_photos object into an array if exists
  const similarPhotos = selectedPhoto.similar_photos
    ? Object.values(selectedPhoto.similar_photos)
    : [];

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        <img src={closeSymbol} alt="Close modal" />
      </button>

      <div className="photo-details-modal__content">
        {/* Main Image Section */}
        <div className="photo-details-modal__main">
          <div className="photo-details-modal__image-container">
            {/* Favorite icon in top left */}
            <PhotoFavButton 
              onClick={() => toggleFavorite(selectedPhoto.id)}
              selected={favoritePhotos.includes(selectedPhoto.id)}
            />
            <img
              className="photo-details-modal__image"
              src={selectedPhoto.urls.full}
              alt={`Enlarged view of ${selectedPhoto.user.name}'s photo from ${selectedPhoto.location.city}`}
            />
          </div>

          {/* Profile bottom nav bar */}
          <div className="photo-details-modal__profile-bar">
            <img
              className="photo-details-modal__user-profile"
              src={selectedPhoto.user.profile}
              alt={`${selectedPhoto.user.name} profile`}
            />
            <div className="photo-details-modal__user-info">
              <span className="photo-details-modal__user-name">{selectedPhoto.user.name}</span>
              <span className="photo-details-modal__user-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </span>
            </div>
          </div>
        </div>

        {/* Related Photos Section */}
        {similarPhotos.length > 0 && (
          <div className="photo-details-modal__related">
            <h4>Related Photos</h4>
            <PhotoList 
              photos={similarPhotos}
              toggleFavorite={toggleFavorite} 
              favorites={favoritePhotos}
              onPhotoClick={() => {}}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;