import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  input: {
    border: 0,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 1,
    textTransform: 'capitalize',
  }
}

const Import = injectSheet(styles)(
  ({
    placeholder,
    type,
    name,
    classes,
    children,
    autoFocus
  }) => (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={classes.input}
      autoFocus={autoFocus}
    />
  )
)

Import.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
}

Import.defaultProps = {
  type: 'text',
}

export default Import;