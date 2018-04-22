import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  cardInner: {
    display: 'flex',
    flexShrink: 0,
    flexBasis: props => props.height,
    alignItems: props => props.alignCenter ? 'center' : 'initial',
  },
}

const CardHolderInner = injectSheet(styles)(({classes, children, flex, alignCenter})=> (
  <div className={classes.cardInner}>{children}</div>
))

CardHolderInner.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  alignCenter: PropTypes.bool,
}

CardHolderInner.defaultProps = {
  height: '50%',
}

export default CardHolderInner;