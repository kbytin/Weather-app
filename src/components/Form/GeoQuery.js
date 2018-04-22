import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Button from 'components/Button'

const styles = {
  geoP: {
    margin: '0 auto',
  },
}

const GeoQuery = injectSheet(styles)(({classes, onClick})=>(
  <p className={classes.geoP}>
    use my
    <Button onClick={onClick} inline>current position</Button>
  </p>
))

GeoQuery.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
}

export default GeoQuery;