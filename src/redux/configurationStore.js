import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countriesReducer from './country/countries';

const rootReducer = combineReducers({
  countriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
