import React from 'react';
import AppImage from './AppImage';
import AppText from './AppText';
import img from '../view/image/1.jpg';

function Herobanner() {
  return (
    <div className="waxon_tm_hero" id="home">
      <AppImage image={img} />
      <AppText />
    </div>
  );
}

export default Herobanner;
