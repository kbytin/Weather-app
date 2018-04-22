import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import { parse, getDay } from 'date-fns';
import ContentLoader from 'react-content-loader';

import { weekDays } from 'lib/dateHelpers';
import { convertDegrees} from 'lib/weatherHelpers';
import Icon from 'components/Icon';

const styles = {
  forecastList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    width: '100%',
    margin: ['auto', 0, 0],
    padding: 0,
    fallbacks: {
      justifyContent: 'space-around',
    }
  },
  forecastDay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '0.5rem',
    marginTop: '1rem',

    '& h6': {
      marginBottom: 0,
      marginTop: 0,
      fontWeight: 400,
    }
  },
  theIcon: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 6,
  },
  temp: {

  }
}

const DayLoader = injectSheet(styles)(({classes}) => (
  <li className={classes.forecastDay} style={{width: 30}}>
    <ContentLoader
      height={40}
      width={30}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="3.6" y="4.38" rx="0" ry="0" width="25" height="4" />
      <circle cx="15.989265863399421" cy="20.54926586339942" r="7.389265863399421" />
      <rect x="11.6" y="31.38" rx="0" ry="0" width="10" height="4" />
    </ContentLoader>
  </li>
))

const CityForecast = injectSheet(styles)(({classes, degreeType, city, list}) => {
  const forecastList = list && list.filter(ctx => ctx.dt_txt.includes(12))

  return (
    <ul className={classes.forecastList}>
      {list
        ? forecastList.map((day, i) => (
          <li key={day.dt + i} className={classes.forecastDay}>
            <h6>{weekDays[getDay(parse(day.dt_txt))]}</h6>
            <Icon icon={day.weather[0].id} className={classes.theIcon} withDayTime/>
            <span className={classes.temp}>{convertDegrees(degreeType, day.main.temp)}&deg;{degreeType}</span>
          </li>
          ))
        : <Fragment>
            <DayLoader />
            <DayLoader />
            <DayLoader />
          </Fragment>
      }
    </ul>
    )
});

export default CityForecast;
