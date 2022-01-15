import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/configurationStore';

describe('App test', () => {
  test('Should mach Snapshot', () => {
    const app = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(app).toMatchSnapshot();
  });
});
