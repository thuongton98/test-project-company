/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadingIndicator.module.scss';

const LoadingIndicator = ({ wrapperClass, spinnerStyles }) => (
  <div className={`${wrapperClass} d-flex justify-content-center align-items-center ${styles.preloader}`}>
    <img style={spinnerStyles} src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif" alt="loader" />
  </div>
);

LoadingIndicator.propTypes = {
  wrapperClass: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  wrapperClass: 'vh-100 w-100',
};

export default LoadingIndicator;
