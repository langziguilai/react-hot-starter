import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './Routes';
import { AppReducer } from './jsx/reducer';

let store = createStore(AppReducer, {});
ReactDOM.render( 
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
