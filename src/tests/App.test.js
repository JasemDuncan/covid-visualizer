import React from 'react';
import '@testing-library/jest-dom';
import {
  render, fireEvent, screen, cleanup,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/configurationStore';

afterEach(() => {
  cleanup();
});

describe('App test', () => {
  // const initialState = { data };
  // const mockStore = configureStore();
  // let store;

  // it('Render Correctly', () => {
  //   // store = mockStore(initialState);
  //   // const tree = renderer.create(
  //   //   <Provider store={store}>
  //   //     <App />
  //   //   </Provider>,
  //   // );
  //   // expect(tree).toMatchSnapshot();
  // });
  test('Testing App component', () => {
    const app = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(app).toMatchSnapshot();
  });

  test('Testing App component', () => {
    const app = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(app.children).not.toBeNull();
  });
});
