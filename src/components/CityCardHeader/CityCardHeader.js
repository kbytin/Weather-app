import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Toggle from 'components/Toggle'

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 20,
    margin: [0, 0, 0, 6],
  },
  toggle: {
    marginLeft: 'auto',
  }
}

const CityCardHeader = injectSheet(styles)(({
  classes,
  onResetCity,
  cityName,
  onDegreeChange,
  degreeValue,
  isDefaultDegree
}) => (
  <div className={classes.header}>
    <Button onClick={onResetCity} noText>
      <Icon icon="leftArrow" height={15}/>
    </Button>
    <h4 className={classes.name}>{cityName}</h4>
    <Toggle
      onClick={onDegreeChange}
      value={degreeValue}
      isDefault={isDefaultDegree}
      className={classes.toggle}
    />
  </div>
));

CityCardHeader.propTypes = {
  classes: PropTypes.object,
  onResetCity: PropTypes.func.isRequired,
  cityName: PropTypes.string,
  onDegreeChange: PropTypes.func,
  degreeValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  isDefaultDegree: PropTypes.bool.isRequired,
}

export default CityCardHeader;
