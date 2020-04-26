import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {Provider} from "react-redux";
import store from './store.js';

import ErrorBoundry from './components/error-boundry';
import service from './services';
import {ServiceProvider} from './components/service-context';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value={service}>
        <App />
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>
, document.getElementById('root'));

