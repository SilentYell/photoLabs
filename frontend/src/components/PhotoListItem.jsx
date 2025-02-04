import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({photo}) => {
  return (
    <div className="photo-list-item">
      <img
        className="photo-list-item__image"
        src={photo.imageSource}
        alt="Photo"
      />
      <div className="photo-list-item__details">
        <img
          className="photo-list-item__profile"
          src={photo.profile}
          alt="Profile"
        />
        <div className="photo-list-item__info">
          <div className="photo-list-item__location">
            {photo.location.city}, {photo.location.country}
          </div>
          <div className="photo-list-item__username">
            {photo.username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;