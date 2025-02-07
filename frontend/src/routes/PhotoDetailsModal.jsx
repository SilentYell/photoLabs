import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, selectedPhoto, favoritePhotos, toggleFavorite }) => {
  useEffect(() => {
    console.log(selectedPhoto);
  }, [selectedPhoto]);

  if (!selectedPhoto) return null;

  // Convert the similar_photos object into an array if exists
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
        {/* Main Image Section with Favorite Button */}
        <div className="photo-details-modal__main">
          <img
            className="photo-details-modal__image"
            src={selectedPhoto.urls.full}
            alt={`Enlarged view of ${selectedPhoto.user.name}'s photo from ${selectedPhoto.location.city}`}
          />
          <PhotoFavButton 
            onClick={() => toggleFavorite(selectedPhoto.id)}
            selected={favoritePhotos.includes(selectedPhoto.id)}
          />
        </div>

        {/* Header Section */}
        <div className="photo-details-modal__header">
          <h3>{selectedPhoto.user.name}</h3>
          <p>{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
        </div>

        {/* Similar Photos Section using PhotoList */}
        {similarPhotos.length > 0 && (
          <div className="photo-details-modal__similar">
            <h4>Similar Photos</h4>
            <PhotoList 
              photos={similarPhotos}
              toggleFavorite={toggleFavorite}  // Use the same handler
              favorites={favoritePhotos}
              onPhotoClick={() => {}}         // Update as needed
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;