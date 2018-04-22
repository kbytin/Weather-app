import { combineReducers } from 'redux';

import types from '../actions/constants';

const currentInitialState = {
  errorMessage: null,
  updated: null,
};

function currentWeatherReducer(state = currentInitialState, action) {
  switch (action.type) {
    case types.CURRENT_WEATHER_FAILURE:
      return Object.assign({}, state, { errorMessage: action.errorMessage });
    case types.CURRENT_WEATHER_SUCCESS:
      return (
        Object.assign(
          {},
          state, {
            ...action.payload,
            updated: action.updated,
            errorMessage: null,
          },
        )
      );

    case types.CURRENT_WEATHER_DISMISS:
      return currentInitialState;
    default:
      return state;
  }
}

function forecastWeatherReducer(state = '', action) {
  switch (action.type) {
    case types.FORECAST_WEATHER_FAILURE:
      return Object.assign({}, state, { errorMessage: action.errorMessage });
    case types.FORECAST_WEATHER_SUCCESS:
      return (
        Object.assign(
          {},
          state, {
            ...action.payload,
            errorMessage: null,
          },
        )
      );
    case types.CURRENT_WEATHER_DISMISS:
      return '';
    default:
      return state;
  }
}

function isFetchingReducer(state = false, action) {
  switch (action.type) {
    case types.CURRENT_WEATHER_REQUEST:
      return true;
    case types.CURRENT_WEATHER_SUCCESS:
    case types.CURRENT_WEATHER_FAILURE:
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  city: currentWeatherReducer,
  cityForecast: forecastWeatherReducer,
  isFetching: isFetchingReducer,
});

export default rootReducer;
