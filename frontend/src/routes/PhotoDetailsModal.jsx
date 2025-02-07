import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, selectedPhoto }) => {
  useEffect(() => {
    console.log(selectedPhoto);
  }, [selectedPhoto]);

  if (!selectedPhoto) return null;

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__content">
        {/* Main Image */}
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.full}
          alt="Enlarged view"
        />

        {/* Header Section */}
        <div className="photo-details-modal__header">
          <h3>{selectedPhoto.user.name}</h3>
          <p>{selectedPhoto.location.title}</p>
        </div>

        {/* Similar Photos */}
        {selectedPhoto.similar_photos && (
          <div className="photo-details-modal__images">
            {Object.values(selectedPhoto.similar_photos).map(similarPhoto => (
              <img
                key={similarPhoto.id}
                className="photo-details-modal__image"
                src={similarPhoto.urls.regular}
                alt="Similar photo"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
