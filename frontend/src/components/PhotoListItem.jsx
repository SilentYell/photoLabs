import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite, isFavorite, onPhotoClick }) => {
  if (!photo) {
    console.error("Photo data is missing");
    return null;
  }

  const { urls, user, location } = photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        onClick={() => toggleFavorite(photo.id)}
        selected={isFavorite}
      />
      <img
        className="photo-list__image"
        src={urls?.regular || ""}
        alt="Photo"
        onClick={() => onPhotoClick(photo)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user?.profile || ""}
          alt="Profile"
        />
        <div className="photo-list__user-info">
          <div>{user?.username || "Unknown"}</div>
          <div className="photo-list__user-location">
            {location?.city || "City Unknown"}, {location?.country || "Country Unknown"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;