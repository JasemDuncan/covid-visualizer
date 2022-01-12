import axios from 'axios';

// DUCK MODEL
// Constantes
const GET_COUNTRIES = 'info/country/GET_COUNTRIES';
const url = 'https://disease.sh/v3/covid-19/countries';
const initialState = [];
// Acciones
export const getCountries = () => async (dispatch) => {
  const result = await axios(url);
  const countries = result.data;
  const fetchedCountries = [];
  // console.log('----');
  //   console.log(countries);
  //   console.log(Object.entries(countries)[0][1]);
  //   console.log(Object.entries(countries)[1]);
  // console.log(Object.entries(countries)[1][1]);
  // console.log('----');
  //   let i = 0;
  countries.forEach((country) => {
    const id = country.country;
    const confirmed = country.cases;
    const { todayCases } = country;
    const { deaths } = country;
    const { todayDeaths } = country;
    const { recovered } = country;
    const { todayRecovered } = country;
    const { active } = country;
    const { critical } = country;
    const { casesPerOneMillion } = country;
    const { deathsPerOneMillion } = country;
    const { tests } = country;
    const { testsPerOneMillion } = country;
    const { population } = country;
    const { continent } = country;
    const { oneCasePerPeople } = country;
    const { oneDeathPerPeople } = country;
    const { oneTestPerPeople } = country;
    const { activePerOneMillion } = country;
    const { recoveredPerOneMillion } = country;
    const { criticalPerOneMillion } = country;
    // i += 1;
    fetchedCountries.push({
      id,
      confirmed,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      active,
      critical,
      casesPerOneMillion,
      deathsPerOneMillion,
      tests,
      testsPerOneMillion,
      population,
      continent,
      oneCasePerPeople,
      oneDeathPerPeople,
      oneTestPerPeople,
      activePerOneMillion,
      recoveredPerOneMillion,
      criticalPerOneMillion,
    });
  });

  dispatch({
    type: GET_COUNTRIES,
    fetchedCountries,
  });
};
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return [...action.fetchedCountries];
    default:
      return state;
  }
};

export default reducer;
