import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Routes} from './components/Routes/routes';
import reducer from './reducers/Reducer';

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
console.log('passed')
