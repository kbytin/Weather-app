import React from 'react';
import PropTypes from 'prop-types';

const LoaderIcon = ({className, width, height}) => (
  <svg version="1.1" className={className}id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width={width} height={height} viewBox="0 0 24 30" style={{enableBackground:'new 0 0 50 50'}} xmlSpace="preserve">
  <rect x="0" y="0" width="4" height="10" fill="currentColor">
    <animateTransform attributeType="xml"
      attributeName="transform" type="translate"
      values="0 0; 0 20; 0 0"
      begin="0" dur="0.6s" repeatCount="indefinite" />
  </rect>
  <rect x="10" y="0" width="4" height="10" fill="currentColor">
    <animateTransform attributeType="xml"
      attributeName="transform" type="translate"
      values="0 0; 0 20; 0 0"
      begin="0.2s" dur="0.6s" repeatCount="indefinite" />
  </rect>
  <rect x="20" y="0" width="4" height="10" fill="currentColor">
    <animateTransform attributeType="xml"
      attributeName="transform" type="translate"
      values="0 0; 0 20; 0 0"
      begin="0.4s" dur="0.6s" repeatCount="indefinite" />
  </rect>
  </svg>
);

LoaderIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

LoaderIcon.defaultProps = {
  width: 24,
  height: 32,
  className: '',
}

export default LoaderIcon;