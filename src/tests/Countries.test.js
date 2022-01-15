import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Countries from '../components/Countries';
import store from '../redux/configurationStore';
import { getCountries } from '../redux/country/countries';
import { getWorld } from '../redux/world/world';

describe('Country test', () => {
  test('Should match Snapshot', () => {
    const country = renderer.create(<Provider store={store}><Countries /></Provider>).toJSON();
    expect(country).toMatchSnapshot();
  });

  test('Should retrieve one value always as pure funtion', () => {
    const count = getCountries().length;
    expect(count).toEqual(1);
  });

  test('Should retrieve a value always as pure funtion', () => {
    const count = getCountries().length;
    expect(count).not.toEqual(2);
  });

  test('Should retrieve one value always as pure funtion', () => {
    const count = getWorld().length;
    expect(count).toEqual(1);
  });

  test('Should retrieve a value always as pure funtion', () => {
    const count = getWorld().length;
    expect(count).not.toEqual(2);
  });
});
