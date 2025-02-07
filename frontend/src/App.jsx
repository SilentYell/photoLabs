import React, {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePhotoClick = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={handlePhotoClick} 
      />
      {showModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;