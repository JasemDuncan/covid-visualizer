import axios from 'axios';
// DUCK MODEL
// CONST
const GET_WORLD = 'info/world/GET_WORLD';
const url = 'https://corona.lmao.ninja/v2/all';
const initialState = [];
// ACTIONS
export const getWorld = () => async (dispatch) => {
  const result = await axios(url);
  const world = result.data;
  const fetchedWorld = [];

  const { updated } = world;
  const { cases } = world;
  const { todayCases } = world;
  const { deaths } = world;
  const { todayDeaths } = world;
  const { recovered } = world;
  const { todayRecovered } = world;
  const { active } = world;
  const { critical } = world;
  const { casePerOneMillion } = world;
  const { deathsPerOneMillion } = world;
  const { tests } = world;
  const { testPerOneMillion } = world;
  const { population } = world;
  const { activePerOneMillion } = world;
  const { afectedCountries } = world;

  fetchedWorld.push({

    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    active,
    critical,
    casePerOneMillion,
    deathsPerOneMillion,
    tests,
    testPerOneMillion,
    population,
    activePerOneMillion,
    afectedCountries,
  });

  dispatch({
    type: GET_WORLD,
    fetchedWorld,
  });
};
// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORLD:
      return [...action.fetchedWorld];
    default:
      return state;
  }
};

export default reducer;
