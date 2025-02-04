import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;