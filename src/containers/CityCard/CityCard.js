import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {degreeTypes} from 'lib/weatherHelpers';
import {resetCity} from 'actions';
import CityCurrentWeather from 'components/CityCurrentWeather';
import CityForecast from 'components/CityForecast';
import {CardHolderInner} from 'components/CardHolder';
import CityCardHeader from 'components/CityCardHeader';

class CityCard extends Component {

  static propTypes = {
    resetCity: PropTypes.func.isRequired,
  }

  state = {
    degreeType: degreeTypes.celcius,
  }

  switchCelciusFarengeit = () => {
    this.setState({degreeType: this.state.degreeType === degreeTypes.celcius
      ? degreeTypes.farenheit
      : degreeTypes.celcius
    });
  }

  render() {
    const { city, cityForecast, resetCity } = this.props;
    const { degreeType } = this.state;
    // TODO: think about connecting CityCurrent and City Forecast to redux individualy
    return (
      <Fragment>
        <CardHolderInner height="10%" alignCenter>
          <CityCardHeader
            onResetCity={resetCity}
            cityName={city.name}
            onDegreeChange={this.switchCelciusFarengeit}
            degreeValue={<Fragment>&deg;{degreeType}</Fragment>}
            isDefaultDegree={degreeType === degreeTypes.celcius}
          />
        </CardHolderInner>
        <CardHolderInner height="50%">
          <CityCurrentWeather
            weatherDesc={city.weather[0]}
            weatherData={city.main}
            forecast={cityForecast && cityForecast.list}
            degreeType={degreeType}
          />
        </CardHolderInner>
        <CardHolderInner height="40%">
          <CityForecast degreeType={degreeType} {...cityForecast} />
        </CardHolderInner>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { city, cityForecast } = state;

  return { city, cityForecast };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetCity,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);