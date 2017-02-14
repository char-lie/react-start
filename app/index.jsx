import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';

import './sass/index.scss';

import DOMStructure from './components/index';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware(),
)(createStore);

const store = composeStoreWithMiddleware(reducers);

render((
  <Provider store={store}>
    <DOMStructure />
  </Provider>
), document.getElementById('app'));
