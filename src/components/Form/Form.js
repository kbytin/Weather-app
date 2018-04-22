import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styleConst from 'styles/styleConst';

const styles = {
  form: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto auto 0 auto',
    borderBottom: [1, 'solid', styleConst.borderColor],

  }
}

const Form = injectSheet(styles)(
  ({
    classes,
    onSubmit,
    children,
  }) => (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  )
);

Form.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.array.isRequired,
}

export default Form;
