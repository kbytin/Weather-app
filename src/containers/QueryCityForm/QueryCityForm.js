import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getCityWeather, getCityWeatherByGeo, fetchingCurrentStarted} from '../../actions/actions';
import {CardHolderInner} from 'components/CardHolder';
import Form, {Input, GeoQuery} from 'components/Form';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import ErrorMessage  from 'components/ErrorMessage';

class QueryCityForm extends Component {
  static propTypes = {
    getCityWeather: PropTypes.func,
    isFetching: PropTypes.bool,
    city: PropTypes.object,
  }

  handleSumbit = (e) => {
    const { getCityWeather } = this.props;

    e.preventDefault();
    getCityWeather(e.target.city.value)
  }

  queryWeatherByPosition = (pos) => {
    const {getCityWeatherByGeo} = this.props;
    const coord = pos.coords;
    getCityWeatherByGeo(coord.latitude, coord.longitude)
  }

  handleGeoQuery = () => {
    const {fetchingCurrentStarted} = this.props;
    fetchingCurrentStarted()
    navigator.geolocation.getCurrentPosition(
      this.queryWeatherByPosition
    )
  }



  render() {
    const {city} = this.props;
    return (
      <Fragment>
        <CardHolderInner height="40%">
          <Form onSubmit={this.handleSumbit}>
            <Input name="city" type="text" placeholder="city" autoFocus/>
            <Button type="submit" noText><Icon icon="search" />search</Button>
          </Form>
        </CardHolderInner>
        <CardHolderInner height="20%">
          <p style={{margin: 'auto'}}>or</p>
        </CardHolderInner>
        <CardHolderInner height="30%">
          <GeoQuery onClick={this.handleGeoQuery} />
        </CardHolderInner>
        <CardHolderInner height="10%">
          {city && city.errorMessage && <ErrorMessage errorText={city.errorMessage} /> }
        </CardHolderInner>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const {isFetching, city} = state;
  return {isFetching, city};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCityWeather,
    getCityWeatherByGeo,
    fetchingCurrentStarted,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryCityForm);