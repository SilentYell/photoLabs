import React from 'react';
import '../styles/LikedPhotosModal.scss';

const LikedPhotosModal = ({ likedPhotos, onClose }) => {
  return (
    <div className="liked-photos-modal">
      <div className="liked-photos-modal__content">
        <button className="liked-photos-modal__close-button" onClick={onClose}>
          Close
        </button>
        <h2>Liked Photos</h2>
        <div className="liked-photos-modal__list">
          {likedPhotos.length > 0 ? (
            likedPhotos.map(photo => (
              <div key={photo.id} className="liked-photos-modal__item">
                <img src={photo.urls.regular} alt={photo.title || "Liked Photo"} />
              </div>
            ))
          ) : (
            <p>No liked photos yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedPhotosModal;