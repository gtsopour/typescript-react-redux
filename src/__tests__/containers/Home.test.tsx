import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from '../../containers/Home/Home';
import reducer from '../../reducers/Reducer';

describe('Home component tests', () => {
  it('Check Home Component Render', () => {
    const store = createStore(reducer, applyMiddleware(thunk));
    const component = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
