import React from 'react';
import PropTypes from 'prop-types';

function AppImage({ image }) {
  return (
    <>
      <div className="background">
        <div className="leftpart" />
        <div className="rightpart">
          <div className="inner">
            <div className="image" style={{ backgroundImage: `url(${image})` }} />
            <div className="overlay_image" />
            <div className="myOverlay loaded" />
          </div>
        </div>
      </div>
    </>
  );
}

AppImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AppImage;
