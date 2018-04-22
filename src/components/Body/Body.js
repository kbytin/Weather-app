import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styleConst from 'styles/styleConst';

const styles = {
  body: {
    backgroundColor: styleConst.orange,
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: styleConst.basecolor,
  }
}

const Body = injectSheet(styles)(({classes, children}) => (
  <div className={classes.body}>{children}</div>
));

Body.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
}

export default Body;