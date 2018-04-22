import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {checkIfCityAvailable} from 'actions'
import QueryCityForm from 'containers/QueryCityForm';
import CityCard from 'containers/CityCard';
import CardHolder from 'components/CardHolder';
import Body from 'components/Body';

class App extends Component {
  static propTypes = {
    city: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    checkIfCityAvailable: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.checkIfCityAvailable();
  }

  render() {
    const {city: {name}, isFetching} = this.props;

    return (
      <Body>
        <CardHolder loaderVisible={isFetching}>
          {name
            ? <CityCard />
            : <QueryCityForm />
          }
        </CardHolder>
      </Body>
    );
  }
}

function mapStateToProps(state) {
 const {city, isFetching} = state;
  return {city, isFetching};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkIfCityAvailable,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
