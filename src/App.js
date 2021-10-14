import React from 'react';
import './view/css/style.css';
import Navbar from './components/Navbar';
import AppButton from './components/AppButton';
import Herobanner from './components/Herobanner';

function App() {
  return (
    <>
      <div className="waxon_tm_all_wrap" data-magic-cursor="show" data-color="black">
        <Navbar />
        <Herobanner />
        <AppButton />
      </div>
    </>
  );
}

export default App;
