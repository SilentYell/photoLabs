import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={photo.imageSource}
        alt="Photo"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.profile}
          alt="Profile"
        />
        <div className="photo-list__user-info">
          <div>
            {photo.username}
          </div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;