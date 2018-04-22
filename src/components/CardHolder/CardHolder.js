import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Loader from 'components/Loader';
import styleConst from 'styles/styleConst';

const styles = {
  card :{
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    width: 520,
    height: 300,
    maxWidth: '100%',
    margin: 'auto',
    backgroundColor: styleConst.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    padding: 16,
    boxSizing: 'border-box',
  }
}

const CardHolder = injectSheet(styles)(({ children, classes, loaderVisible }) => (
  <div className={classes.card}>
    {children}
    <Loader loaderVisible={loaderVisible} />
  </div>
));

CardHolder.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  loaderVisible: PropTypes.bool,
}

export default CardHolder;
