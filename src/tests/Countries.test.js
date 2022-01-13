import React from 'react';
import '@testing-library/jest-dom';
import {
  render, fireEvent, screen, cleanup, getByTestId,
} from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Countries from '../components/Countries';
import data from './__mock__/data_mock.json';
// import covid from './__mock__/covid_mock.json';
import store from '../redux/configurationStore';

afterEach(() => {
  cleanup();
});

describe('Country test', () => {
  test('Testing Country component', () => {
    const country = renderer.create(<Provider store={store}><Countries /></Provider>).toJSON();
    expect(country).toMatchSnapshot();
  });

  test('reders content', () => {
    const screen = renderer.create(
      <Provider store={store}>
        <Countries />
      </Provider>,
    ).toJSON();

    expect(screen.children).not.toBeNull();
  });

  // test('count contries',()=>{
  //     const screen = renderer.create(
  //         <Provider store={store}>
  //             <Countries />
  //         </Provider>
  //       ).toJSON();
  //     const countryList=screen.container;

  //     expect(countryList).toBe(countryList);
  // });

  // test('reders content',()=>{
  //    const tree = renderer.create(<Countries />).toJSON();
  //    expect(tree).toMatchSnapshot();
  // });
  // test('reders content',()=>{
  //     const component = render(
  //     <Provider >
  //         <Countries />
  //     </Provider>

  //     );
  //     // console.log(component);
  //     component.getByText('Algeria');

  // });
  // const initialState = {data}
  // const mockStore = configureStore();
  // const store = mockStore(initialState);

  // it('Matches the snapshot', ()=>{
  //     const tree=renderer.create(<Countries />).toJSON();
  //     expect(tree).toMatchSnapshot();
  // });

  // test('Renders correctly', () =>{
  //     const countryComponent = render (
  //         <Provider store={store}>
  //             <Router>
  //                 <Countries />
  //             </Router>
  //         </Provider>,
  //     );
  //     expect(countryComponent).toMatchInlineSnapshot();
  // });

  // test('',()=>{
  //     const countryComponent = render (
  //         <Provider store={store}>
  //             <Router>
  //                 <Countries />
  //             </Router>
  //         </Provider>,
  //     );
  //     const stateList=homeComponent.container.querySelector('h1');
  //     expect(stateList.children).toHaveLength(224);
  // });

  // test('',()=>{
  //     const countryComponent=render(
  //         <Provider store={store}>
  //             <Router>
  //                 <Countries />
  //             </Router>
  //         </Provider>
  //     );
  //     const countryList=countryComponent.container.querySelector('h5');
  //     const searchBar=homeComponent.getByPlaceholderText('search');
  //     fireEvent.change(searchBar, {target: {value: 'pe'}});
  //     expect(countryList.children).toHaveLength(1);

  // });
});
