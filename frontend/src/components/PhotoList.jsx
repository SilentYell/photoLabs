import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favorites, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <li key={photoData.id}>
          <PhotoListItem 
            photo={photoData}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(photoData.id)}
            onPhotoClick={onPhotoClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
