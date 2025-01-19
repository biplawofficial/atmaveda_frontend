import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import './navbar8.css';

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.navbar8-container8');
      const dropdownTrigger = document.querySelector('.navbar8-link4-dropdown-trigger');
      if (dropdown && !dropdown.contains(event.target) && !dropdownTrigger.contains(event.target)) {
        setLink5DropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive " >
        <img alt={props.logoAlt} src="" className="navbar8-image1" /> 
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link to="/" className="navbar8-link11 thq-link thq-body-small">
              {props.link1 ?? <Fragment><span className="navbar8-text27">Home</span></Fragment>}
            </Link>
            <Link to="/kund" className="thq-link thq-body-small">
              {props.link2 ?? <Fragment><span className="navbar8-text16">My Kundali</span></Fragment>}
            </Link>
            <Link
              to="/blog"
              className="navbar8-link31 thq-link thq-body-small"
            
             
            >
            
              {props.link3 ?? <Fragment><span className="navbar8-text14">Blog And Content</span></Fragment>}
            </Link>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar8-link4-dropdown-trigger"
            >
              <Link to="/chat" className="navbar8-image-link">
                {props.link4 ?? <Fragment><span className="navbar8-text20">Chat With AI Astrologer</span></Fragment>}
                </Link>
            </div>
          </nav>
          
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img alt={props.logoAlt} src={props.logoSrc} className="navbar8-logo" />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <Link to={props.link1Url} className="navbar8-link12 thq-link thq-body-small">
                {props.link1 ?? <Fragment><span className="navbar8-text27">Home</span></Fragment>}
              </Link>
              <Link to={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? <Fragment><span className="navbar8-text16">My Kundali</span></Fragment>}
              </Link>
              <Link to="/blog" className="navbar8-link32 thq-link thq-body-small">
                {props.link3 ?? <Fragment><span className="navbar8-text14">Blog And Content</span></Fragment>}
              </Link>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <span className="thq-link thq-body-small">
                    {props.link4 ?? <Fragment><span className="navbar8-text20">Chat With AI Astrologer</span></Fragment>}
                  </span>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar8-container6">
                    <Link to={props.linkUrlPage1}>
                      <div className="navbar8-menu-item1">
                        <img alt={props.page1ImageAlt} src={props.page1ImageSrc} className="navbar8-page1-image1" />
                        <div className="navbar8-content1">
                          <span className="navbar8-page11 thq-body-large">
                            {props.page1 ?? <Fragment><span className="navbar8-text17">Home</span></Fragment>}
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description ?? <Fragment><span className="navbar8-text26">Explore your daily horoscope readings</span></Fragment>}
                          </span>
                        </div>
                      </div>
                    </Link>
                    {/* Repeat for other pages as needed */}
                  </div>
                )}
              </div>
            </nav>
            
          </div>
        </div>
      </header>
      {link5DropdownVisible && (
        <div onClick={() => setLink5DropdownVisible(false)} className="navbar8-container8"></div>
      )}
    </header>
  );
};

Navbar8.defaultProps = {
  link3Url: '/blog',
  link1Url: 'https://www.teleporthq.io',
  page3ImageSrc: 'https://images.unsplash.com/photo-1587242563826-a438ce9e3cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  linkUrlPage1: 'https://www.teleporthq.io',
  page3ImageAlt: 'Blog And Content Image',
  link3: undefined,
  logoAlt: 'AstroAI',
  link2: undefined,
  logoSrc: 'https://static.teleporthq.io/project-asset-assets/astroai_logo_6e66e2c.png',
  action1: undefined,
  link4: "/chat",
  action2: undefined,
  page1ImageAlt: 'AstroAI Image 1',
  page1ImageSrc: 'https://images.unsplash.com/photo-1500811970670-04d5d97848b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5NXw&ixlib=rb-4.0.3&q=80&w=1080',
};

Navbar8.propTypes = {
  action1: PropTypes.node,
  action2: PropTypes.node,
  link1: PropTypes.node,
  link2: PropTypes.node,
  link3: PropTypes.node,
  link4: PropTypes.node,
  page1: PropTypes.node,
  page1Description: PropTypes.node,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
  link3Url: PropTypes.string,
  link4Url: PropTypes.string,
  linkUrlPage1: PropTypes.string,
};

export default Navbar8;
