import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App/App';

import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));
serviceWorker.unregister();
