import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from './Cards';
import './hero17.css';

const Hero17 = (props) => {
  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', horoscope: 'Today is a day for new beginnings. Embrace change!' },
    { name: 'Taurus', symbol: '♉', horoscope: 'Take time to reflect and focus on your personal growth.' },
    { name: 'Gemini', symbol: '♊', horoscope: 'A new opportunity may come your way today. Be open to it.' },
    { name: 'Cancer', symbol: '♋', horoscope: 'Your creativity is at its peak today. Use it wisely!' },
    { name: 'Leo', symbol: '♌', horoscope: 'Confidence is key today. Step forward and take the lead.' },
    { name: 'Virgo', symbol: '♍', horoscope: 'Don’t be afraid to seek advice. Collaboration will bring success.' },
    { name: 'Libra', symbol: '♎', horoscope: 'Balance is important today. Don’t let anything tip the scale.' },
    { name: 'Scorpio', symbol: '♏', horoscope: 'Your intuition is strong today. Trust your instincts.' },
    { name: 'Sagittarius', symbol: '♐', horoscope: 'Take a risk today. Adventure awaits you.' },
    { name: 'Capricorn', symbol: '♑', horoscope: 'Focus on your long-term goals. Your hard work will pay off.' },
    { name: 'Aquarius', symbol: '♒', horoscope: 'Today is a great day for socializing and making new connections.' },
    { name: 'Pisces', symbol: '♓', horoscope: 'Trust your emotions today. They will guide you to the right path.' },
  ];

  return (
    <div
    className="hero17-header78"
    style={{
      backgroundImage: `url(${props.backgroundImageUrl || require('./mt.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="hero17-column thq-section-max-width">
      <div className="hero17-content1">
        <h1 className="hero17-text1 thq-heading-1">
          {props.heading1 ?? (
            <Fragment>
              <span className="hero17 ">Welcome to Astrology Hub</span>
            </Fragment>
          )}
        </h1>
        <p className="hero17-text2 thq-body-large">
          {props.content1 ?? (
            <Fragment>
              <span className="hero17-text6">
                Explore the mysteries of the stars and uncover what the universe has in store for you.
              </span>
            </Fragment>
          )}
        </p>
      </div>
      <div className="hero17-actions">
        <button className="thq-button-filled hero17-button1">
          <span className="thq-body-small">
            {props.action1 ?? (
              <Fragment>
                <span className="hero17-text7">Get Your Personalized Horoscope</span>
              </Fragment>
            )}
          </span>
        </button>
        <button className="thq-button-outline hero17-button2">
          <span className="thq-body-small">
            {props.action2 ?? (
              <Fragment>
                <span className="hero17-text8">Learn More</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
    <div className="hero17-content2">
      <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
        <div className="thq-animated-group-horizontal">
          {zodiacSigns.slice(0, 6).map((sign, index) => (
            <Card key={index} name={sign.name} symbol={sign.symbol} horoscope={sign.horoscope} />
          ))}
        </div>
        <div className="thq-animated-group-horizontal">
          {zodiacSigns.slice(6).map((sign, index) => (
            <Card key={index} name={sign.name} symbol={sign.symbol} horoscope={sign.horoscope} />
          ))}
        </div>
      </div>
    </div>
    <div className="hero17-container2">
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <style>
            @keyframes scroll-x {
              from {
                transform: translateX(0);space nebula printrres
              }
              to {
                transform: translateX(calc(-100% - 16px));
              }
            }
  
            @keyframes scroll-y {
              from {
                transform: translateY(0);
              }space nebula printrres
              to {
                transform: translateY(calc(-100% - 16px));
              }
            }
          </style>
          `,
        }}
      ></div>
    </div>
  </div>
  
  );
};

Hero17.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  action2: undefined,
};

Hero17.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
};

export default Hero17;
