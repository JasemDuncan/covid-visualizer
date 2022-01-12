import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCovidData } from '../redux/country/countries';

const Info = (props) => {
  console.log('Antes de props');
  const { country } = props;
  //   country = country.id.replace('%20', ' ');
  console.log('imprime props');
  console.log(country);
  //   const { slug } = country;
  //   const covidInfo = useSelector((state) => state.countriesReducer);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (!covidInfo[slug]) dispatch(fetchCovidData(slug));
  //   }, []);
  return (
    <div>
      <h1>{country.id}</h1>
      <h2>{country.confirmed}</h2>
      <h3>{country.todayCases}</h3>
      <h3>{country.deaths}</h3>
      <h3>{country.todayDeaths}</h3>
      <h3>{country.recovered}</h3>
      <h3>{country.todayRecovered}</h3>
      <h3>{country.active}</h3>
      <h3>{country.critical}</h3>
      <h3>{country.casesPerOneMillion}</h3>
      <h3>{country.deathsPerOneMillion}</h3>
      <h3>{country.tests}</h3>
      <h3>{country.testsPerOneMillion}</h3>
      <h3>{country.population}</h3>
      <h3>{country.continent}</h3>
      <h3>{country.oneCasePerPeople}</h3>
      <h3>{country.oneDeathPerPeople}</h3>
      <h3>{country.oneTestPerPeople}</h3>
      <h3>{country.activePerOneMillion}</h3>
      <h3>{country.recoveredPerOneMillion}</h3>
      <h3>{country.criticalPerOneMillion}</h3>
    </div>
  );
};

Info.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default Info;
