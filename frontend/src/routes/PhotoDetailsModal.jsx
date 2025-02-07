import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose }) => {
  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Modal content goes here */}
    </div>
  );
};

export default PhotoDetailsModal;
