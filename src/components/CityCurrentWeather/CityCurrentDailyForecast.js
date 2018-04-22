
import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { parse, getHours } from 'date-fns';

import { convertDegrees} from 'lib/weatherHelpers';
const styles = {
  items: {
   margin: 0,
   padding: 0,
   listStyle: 'none',
   lineHeight: 1.4,
   fontSize: '0.8rem',
   '& li': {
     display: 'flex',
   }

  },
  timeName: {
    width: 60,

  }
}

const hoursToShow = [6, 12, 18, 0];

const convertTimeToWords = (hour) => {
  switch(hour) {
    case hoursToShow[0]:
      return 'Morning';
    case hoursToShow[1]:
      return 'Day';
    case hoursToShow[2]:
      return 'Evening';
    case hoursToShow[3]:
      return 'Night';
    default:
      return hour
  }
}

const DailyForecast = injectSheet(styles)(({classes, forecast, degreeType}) => {

  function renderForecast(forecast) {
    const items = []
    forecast.slice(0, 8).forEach((time, i) => {
      const forecastTime = getHours(parse(time.dt_txt));

      if (hoursToShow.includes(forecastTime)) {
        items.push(
          <li key={time + i}>
            <span className={classes.timeName}>{convertTimeToWords(forecastTime)}</span>
            <span>{convertDegrees(degreeType, time.main.temp)}&deg;{degreeType}</span>
          </li>
        )
      }
    })

    return items;
  }

  return <ul className={classes.items}>{renderForecast(forecast)}</ul>
})

DailyForecast.propTypes = {
  classes: PropTypes.object,
  forecast: PropTypes.array,
  degreeType: PropTypes.string,
}

export default DailyForecast;