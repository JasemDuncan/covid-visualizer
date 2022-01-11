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
  console.log('----');
  //   console.log(countries);
  //   console.log(Object.entries(countries)[0][1]);
  //   console.log(Object.entries(countries)[1]);
  // console.log(Object.entries(countries)[1][1]);
  console.log('----');
  //   let i = 0;
  countries.forEach((country) => {
    const id = country.country;
    const confirmed = country.cases;
    // i += 1;
    fetchedCountries.push({
      id, confirmed,
    });
  });
  console.log('FetCHEDCOUNTRIES');
  console.log(fetchedCountries);
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
