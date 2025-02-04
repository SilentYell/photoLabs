import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favorites }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <li key={photoData.id}>
          <PhotoListItem 
            photo={photoData}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(photoData.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
