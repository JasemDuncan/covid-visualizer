import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter, NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Test for NavBar', () => {
  test('Should match to snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('Should render NavBar component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    ).root;
    expect(tree.findByType(NavLink).props.to).toBe('/');
  });

  test('should match the label text', () => {
    const testRenderer = renderer.create(
      <MemoryRouter><NavBar /></MemoryRouter>,
    ).root;
    expect(testRenderer.findByProps({ className: 'title' }).children).toEqual(['COVID VISUALIZER ™']);
  });
});
