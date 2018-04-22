const APPID = '&APPID=93157ad9baef4a89f38d2d19804f29a1';
const cityUrl = (type, query) => {
  let forecastType = '';

  if (type === 'current') {
    forecastType = 'weather?'
  }

  if (type === 'forecast') {
    forecastType = 'forecast?'
  }
  return `http://api.openweathermap.org/data/2.5/${forecastType}${query}${APPID}`
}

function getCityWeather(type, params) {
  return fetch(cityUrl(type, params))
    .then(response => {
      if (!response.ok) {
        return response.statusText;
      }

      return response.json()
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getCurrentWeatherByName(cityName) {
  return getCityWeather('current', `q=${cityName}`)
}

export function getCurrentWeatherByGeo(lat, lon) {
  return getCityWeather('current', `lat=${lat}&lon=${lon}`)
}

export function getForecastWeatherByName(cityName) {
  return getCityWeather('forecast', `q=${cityName}`)
}

export function getForecastWeatherByGeo(lat, lon) {
  return getCityWeather('forecast', `lat=${lat}&lon=${lon}`)
}

export const degreeTypes = {
  celcius: 'C',
  farenheit: 'F',
}

export function convertDegrees(degreeType, valueInKelvins) {
  switch(degreeType) {
    case degreeTypes.celcius:
      return Math.round(valueInKelvins - 273.15);
    case degreeTypes.farenheit:
      return Math.round((valueInKelvins - 273.15) * 9/5 + 32);
    default:
      return 'Something wrong with degrees calculatuion'
  }
}