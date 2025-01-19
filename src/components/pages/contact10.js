import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './contact10';

const Contact10 = (props) => {
  return (
    <div className="flex flex-col items-start space-y-12 py-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-row mb-12 justify-start">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold">
              {props.heading1 ?? (
                <Fragment>
                  <span className="text-xl font-bold">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="text-lg">
              {props.content1 ?? (
                <Fragment>
                  <span className="text-gray-600">
                    For any inquiries or feedback, feel free to reach out to us
                    using the contact information below.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between space-x-8">
          <div className="flex flex-col items-center space-y-6 flex-1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="object-cover w-full h-60"
            />
            <h3 className="text-2xl font-semibold text-center">
              {props.location1 ?? (
                <Fragment>
                  <span className="text-xl font-bold">Main Office</span>
                </Fragment>
              )}
            </h3>
            <p className="text-lg text-center">
              {props.location1Description ?? (
                <Fragment>
                  <span className="text-gray-600">
                    Our main office is located in the heart of the city, easily
                    accessible by public transportation.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="flex justify-center">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 flex-1">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="object-cover w-full h-60"
            />
            <h3 className="text-2xl font-semibold text-center">
              {props.location2 ?? (
                <Fragment>
                  <span className="text-xl font-bold">Secondary Office</span>
                </Fragment>
              )}
            </h3>
            <p className="text-lg text-center">
              {props.location2Description ?? (
                <Fragment>
                  <span className="text-gray-600">
                    Visit our secondary office for a more personalized
                    consultation with our astrologers.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="flex justify-center">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact10.defaultProps = {
  location2Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1687603926059-70c086f6c626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1701498736752-bcf25e1d5c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Image of our main office location',
  content1: undefined,
  location2ImageAlt: 'Image of our secondary office location',
  location1Description: undefined,
  location2: undefined,
  location1: undefined,
  heading1: undefined,
};

Contact10.propTypes = {
  location2Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  location1: PropTypes.element,
  heading1: PropTypes.element,
};

export default Contact10;
