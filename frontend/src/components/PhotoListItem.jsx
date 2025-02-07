import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite, isFavorite, onPhotoClick }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        onClick={() => toggleFavorite(photo.id)}
        selected={isFavorite}
      />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt="Photo"
        onClick={() => onPhotoClick(photo)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt="Profile"
        />
        <div className="photo-list__user-info">
          <div>{photo.user.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;