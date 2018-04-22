import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styleConst from 'styles/styleConst';

const styles = {
  button: {
    border: 0,
    background: 'none',
    fontSize: 16,
    color: styleConst.baseColor,
  },
  inline: {
    borderBottom: [1, 'dashed', styleConst.baseColor],
    padding: 0,
    marginLeft: '1ex',
    marginRight: '1ex',
  },
  noText: {
    textIndent: -9999,
    fontSize: 0,
    width: 32,
    height: 32,
    position: 'relative',
    '& svg': {
      maxHeight: '65%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fill: 'currentColor',
    }
  },
}
const Button = injectSheet(styles)(({children, classes, type, noText, onClick, inline}) => (
    <button
      type={type}
      className={[
        classes.button,
        noText ? classes.noText : null,
        inline ? classes.inline : null,
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  inline: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
}

export default Button;