import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, selectedPhoto }) => {
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
            onClick={() => console.log(`Toggle favorite for photo id ${selectedPhoto.id}`)}
            selected={false}  // Replace with appropriate favorite state if available
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
              toggleFavorite={() => {}}  // Replace with the actual toggle handler if available
              favorites={[]}             // Replace with the list of favorite photo ids if available
              onPhotoClick={() => {}}    // Replace with an appropriate handler if needed
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
