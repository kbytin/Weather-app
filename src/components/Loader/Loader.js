import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Icon from 'components/Icon/Icon';
const styles = {
 loader: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 0,
 },
 icon: {
   position: 'absolute',
   bottom: '1em',
   left: '50%',
   transform: 'translateX(-50%)',
   transition: 'all 2000ms ease-in-out',
   color: 'lightgray',
 },
  iconVisible: {
    composes: '$icon',
    display: 'block',
    visibility: 'visible',
  },
  iconHidden: {
    composes: '$icon',
    visibility: 'hidden',
    display: 'none',
  }
}

const Loader = injectSheet(styles)(({classes, loaderVisible}) => (
  <div className={classes.loader}>
    <Icon icon="loader" className={classes[loaderVisible ? 'iconVisible' : 'iconHidden']}/>
  </div>
));

Loader.propTypes = {
  classes: PropTypes.object,
  loaderVisible: PropTypes.bool,
}

export default Loader;

