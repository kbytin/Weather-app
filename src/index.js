import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const fontsConfig = {
  google: {
    families: ['Open Sans:300,600']
  },
}

ReactDOM.render(

    <Provider store={store}>
      <WebfontLoader config={fontsConfig} onActive={document.body.classList.add('fontLoaded')}>
      <App />
      </WebfontLoader>
    </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
