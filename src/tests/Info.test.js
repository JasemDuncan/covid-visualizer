import React from 'react';
import renderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info from '../components/Info';

describe('Test for Info', () => {
  const OneCountry = {
    active: 5339,
    activePerOneMillion: 132.58,
    casesPerOneMillion: 3939,
    confirmed: 158612,
    continent: 'Asia',
    critical: 1124,
    criticalPerOneMillion: 27.91,
    deaths: 7376,
    deathsPerOneMillion: 183,
    id: 'Afghanistan',
    oneCasePerPeople: 254,
    oneDeathPerPeople: 5460,
    oneTestPerPeople: 48,
    population: 40270088,
    recovered: 145897,
    recoveredPerOneMillion: 3622.96,
    tests: 833693,
    testsPerOneMillion: 20703,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
  };
  const EmptyCountry = {
    active: 5339,
    activePerOneMillion: 132.58,
    casesPerOneMillion: 3939,
    confirmed: 158612,
    continent: 'Asia',
    critical: 1124,
    criticalPerOneMillion: 27.91,
    deaths: 7376,
    deathsPerOneMillion: 183,
    id: null,
    oneCasePerPeople: 254,
    oneDeathPerPeople: 5460,
    oneTestPerPeople: 48,
    population: 40270088,
    recovered: 145897,
    recoveredPerOneMillion: 3622.96,
    tests: 833693,
    testsPerOneMillion: 20703,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
  };
  test('', () => {
    const tree = renderer.create(
      <Info country={OneCountry} />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Should Render world id name', () => {
    const testRenderer = renderer.create(<Info country={OneCountry} />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByProps({ className: 'titleWorld card-title' }).children).toEqual(['Afghanistan']);
  });

  test('Should render world empty id name', () => {
    const testRenderer = renderer.create(<Info country={EmptyCountry} />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByProps({ className: 'titleWorld card-title' }).children).toEqual([]);
  });

  test('Should find a div with a className', () => {
    const testRenderer = renderer.create(<Info country={EmptyCountry} />);
    const element = testRenderer.root.findByType('div');
    expect(element.props.className.includes('testing')).toBe(true);
  });

  test('Should count amount of Font Awesome Icons', () => {
    const testRenderer = renderer.create(<Info country={OneCountry} />);
    const element = testRenderer.root.findAllByType(FontAwesomeIcon);
    expect(element.length).toEqual(15);
  });
});
