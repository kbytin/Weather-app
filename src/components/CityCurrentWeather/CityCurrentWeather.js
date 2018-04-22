import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { format as formatDate, getDay } from 'date-fns';

import styleConst from 'styles/styleConst';
import { weekDays } from 'lib/dateHelpers';
import { convertDegrees} from 'lib/weatherHelpers';
import Icon from 'components/Icon';
import DailyForecast from './CityCurrentDailyForecast';

const styles = {
  currentCard: {
    margin: [26, 0],
    width: '100%',
  },
  dayNow: {
    fontSize: '1.15rem',
  },
  weatherState: {
    marginTop: 6,
  },
  theWeather: {
    color: styleConst.orange,
    fontSize: 60,
    fontWeight: 600,
    width: '58%',
    display: 'flex',
    alignItems: 'center',
  },
  theIcon: {
    marginRight: 32,
    marginLeft: 32,
  },
  currentCardInner: {
    display: 'flex',
    width: '100%',
  },
}


const CityCurrentWeather = injectSheet(styles)(({
  classes,
  weatherDesc,
  weatherData,
  degreeType,
  forecast,
}) => {

  const dateNow = new Date();
  const weekDayNow = weekDays[getDay(dateNow)]
  const dateToRender = formatDate(dateNow, 'MMMM  Do  YYYY')

  return (
    <div className={classes.currentCard}>
      <div className={classes.dayNow}>{weekDayNow}, {dateToRender}</div>
      <div className={classes.weatherState}>{weatherDesc.description}</div>
      <div className={classes.currentCardInner}>
        <div className={classes.theWeather}>
          {convertDegrees(degreeType, weatherData.temp)}&deg;{degreeType}
          <Icon icon={weatherDesc.id} className={classes.theIcon} withDayTime/>
        </div>
        {forecast && <DailyForecast forecast={forecast} degreeType={degreeType}/>}
      </div>
    </div>
  )
});

CityCurrentWeather.propTypes = {
  classes: PropTypes.object,
  weatherDesc: PropTypes.object,
  weatherData: PropTypes.object,
  degreeType: PropTypes.string,
  forecast: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ])
}

export default CityCurrentWeather;
