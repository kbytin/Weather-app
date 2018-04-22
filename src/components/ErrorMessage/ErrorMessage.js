import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  error: {
    background: 'firebrick',
    margin: 'auto',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  }
}

const ErrorMessage = injectSheet(styles)(({classes, errorText}) => (
  <p className={classes.error}>{errorText}</p>
));

ErrorMessage.defaultProps = {
  classes: PropTypes.object,
  errorText: PropTypes.string,
}

export default ErrorMessage;
