import React from 'react';

function Navbar() {
  return (
    // <!-- TOPBAR -->
    <div className="waxon_tm_topbar">
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="khoa">
              <img src="img/logo/dark.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <div className="links">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home">
                    <span className="first">Home</span>
                    <span className="second">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">About</span>
                    <span className="second">About</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#news">
                    <span className="first">News</span>
                    <span className="second">News</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">Contact</span>
                    <span className="second">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- /TOPBAR -->
  );
}

export default Navbar;
