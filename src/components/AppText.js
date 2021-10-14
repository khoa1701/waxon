import React from 'react';
import PropTypes from 'prop-types';

function AppText({ text }) {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content_inner">
            <div className="name">
              <span>{text}</span>
              <span>Creative Web &amp; App Developer</span>
            </div>
          </div>
          <div className="waxon_tm_down" data-skin="dark" data-position="">
            <div className="line_wrapper">
              <div className="line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

AppText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AppText;
