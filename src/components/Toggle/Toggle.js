import React from 'react';
import injectSheet from 'react-jss';

const border = {
  border: [1, 'solid', 'black'],
  borderRadius: 10,
}

const position = {
  position: 'absolute',
  left: 0,
  top: '50%',
  willChange: 'transform',
  transition: 'transform 250ms ease-in-out'
}

const styles = {
  toggle: {
    width: 42,
    height: 16,
    position: 'relative',
    textAlign: 'left',
    fontSize: 8,
    background: 'white',
    ...border,

    '&::after': {
      display: 'block',
      content: '""',
      ...border,
      width: 12,
      height: 10,
      backgroundColor: 'paleturquoise',
      ...position,
      zIndex: 1,
      transform: props => props.isDefault ? 'translate(25px, -50%)' : 'translate(2px, -50%)',
    },
  },
  inner: {
    ...position,
    transform: props => props.isDefault ? 'translate(5px, -50%)' : 'translate(26px, -50%)',
  }
}


const ToggleSwitcher = injectSheet(styles)(({classes, onClick, value, isDefault, className = '' }) => (
  <button onClick={onClick} className={[classes.toggle, className].join(' ')}>
    <span className={classes.inner}>{value}</span>
  </button>
));

export default ToggleSwitcher;
