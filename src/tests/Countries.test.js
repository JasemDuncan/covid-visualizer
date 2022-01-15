import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Countries from '../components/Countries';
import store from '../redux/configurationStore';

describe('Country test', () => {
  test('Should match Snapshot', () => {
    const country = renderer.create(<Provider store={store}><Countries /></Provider>).toJSON();
    expect(country).toMatchSnapshot();
  });
});
