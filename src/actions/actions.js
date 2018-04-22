import types from './constants';
import {
  getCurrentWeatherByName,
  getForecastWeatherByName,
  getCurrentWeatherByGeo,
  getForecastWeatherByGeo,
} from '../lib/weatherHelpers';

const localStorageNames = {
  city: 'weatherAppCity',
  cityForecast: 'weatherAppCityFirecast',

}

export function fetchingCurrentStarted() {
  return {
    type: types.CURRENT_WEATHER_REQUEST,
  };
}

function fetchingCurrentFailed(errorMessage) {
  return {
    type: types.CURRENT_WEATHER_FAILURE,
    errorMessage,
  };
}

function fetchingCurrentSuccess(payload) {
  return {
    type: types.CURRENT_WEATHER_SUCCESS,
    payload,
    updated: Date.now(),
  };
}

function dismissCurrentCity() {
  return {
    type: types.CURRENT_WEATHER_DISMISS,
  };
}

function fetchingForecastStarted() {
  return {
    type: types.FORECAST_WEATHER_REQUEST,
  };
}

function fetchingForecastFailed(errorMessage) {
  return {
    type: types.FORECAST_WEATHER_FAILURE,
    errorMessage,
  };
}

function fetchingForecastSuccess(payload) {
  return {
    type: types.FORECAST_WEATHER_SUCCESS,
    payload,
    updated: Date.now(),
  };
}

export function fetchCityWeather(city) {
  return (dispatch) => {
    dispatch(fetchingCurrentStarted());
    return getCurrentWeatherByName(city)
      .then(
        (response) => {
          if (typeof response === 'string') {
            dispatch(fetchingCurrentFailed(response));
          } else {
            dispatch(fetchingCurrentSuccess(response));
            localStorage.setItem(localStorageNames.city, JSON.stringify(response))
          }
        },
        (error) => {
          dispatch(fetchingCurrentFailed(error));
          throw error;
        },
      );
  };
}

export function fetchCityWeatherByGeo(lat, lon) {
  return (dispatch) => {
    return getCurrentWeatherByGeo(lat, lon)
      .then(
        (response) => {
          if (typeof response === 'string') {
            dispatch(fetchingCurrentFailed(response));
          } else {
            dispatch(fetchingCurrentSuccess(response));
            localStorage.setItem(localStorageNames.city, JSON.stringify(response))
          }
        },
        (error) => {
          dispatch(fetchingCurrentFailed(error));
          throw error;
        },
      );
  };
}

function fetchCityForecast(city) {
  return (dispatch) => {
    dispatch(fetchingForecastStarted());
    getForecastWeatherByName(city)
      .then(
        (response) => {
          if (typeof data === 'string') {
            dispatch(fetchingForecastFailed(response));
          } else {
            dispatch(fetchingForecastSuccess(response));
            localStorage.setItem(localStorageNames.cityForecast, JSON.stringify(response))
          }
        },
        (error) => {
          dispatch(fetchingForecastFailed(error));
        },
      );
  };
}

function fetchCityForecastByGeo(lat, lon) {
  return (dispatch) => {
    dispatch(fetchingForecastStarted());
    getForecastWeatherByGeo(lat, lon)
      .then(
        (response) => {
          if (typeof data === 'string') {
            dispatch(fetchingForecastFailed(response));
          } else {
            dispatch(fetchingForecastSuccess(response));
            localStorage.setItem(localStorageNames.cityForecast, JSON.stringify(response))
          }
        },
        (error) => {
          dispatch(fetchingForecastFailed(error));
        },
      );
  };
}


export function getCityWeather(city) {
  return dispatch => dispatch(fetchCityWeather(city))
    .then(() => dispatch(fetchCityForecast(city)));
}

export function getCityWeatherByGeo(lat, lon) {
  return dispatch => dispatch(fetchCityWeatherByGeo(lat, lon))
    .then(() => dispatch(fetchCityForecastByGeo(lat, lon)));
}

export function resetCity() {
  return (dispatch) => {
    dispatch(dismissCurrentCity());
    localStorage.removeItem(localStorageNames.city);
    localStorage.removeItem(localStorageNames.cityForecast)
  };
}

export function updateCityForecastIfNeeded(city) {
  if (city) {
    getCityWeather(city);
  }
}

export function checkIfCityAvailable() {
  const cityInLocalStorage = localStorage.getItem(localStorageNames.city) ;

  return (dispatch) => {
    if (cityInLocalStorage && cityInLocalStorage.includes('{')) {
      const city = JSON.parse(cityInLocalStorage);
      dispatch(fetchingCurrentSuccess(city));
      dispatch(
        fetchingForecastSuccess(
          JSON.parse(
            localStorage.getItem(localStorageNames.cityForecast)
          )
        )
      );
      dispatch(getCityWeather(city.name));
    }
  }
}