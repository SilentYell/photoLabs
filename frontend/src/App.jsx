import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {
  const photos = Array.from({ length: 3 }, (_, index) => ({
    id: String(index + 1),
    location: {
      city: ["Montreal", "Toronto", "Ottawa"][index],
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-${index + 1}-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  }));

  return (
    <div className="App">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;