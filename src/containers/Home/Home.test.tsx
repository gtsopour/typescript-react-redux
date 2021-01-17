import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../../reducers/Reducer';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  // @ts-ignore
  render(<Provider store={store}><Home /></Provider>);
  const element = screen.getByText(/Projects/i);
  expect(element).toBeTruthy();
});
