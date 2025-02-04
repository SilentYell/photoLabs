import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <li key={photoData.id}>
          <PhotoListItem 
            photo={{
              id: photoData.id,
              imageSource: photoData.urls.regular,
              location: photoData.location,
              username: photoData.user.username,
              profile: photoData.user.profile
            }} 
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
