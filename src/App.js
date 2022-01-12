import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import Countries from './components/Countries';
import Info from './components/Info';

function App() {
  const countries = useSelector((state) => state.countriesReducer);
  return (
    <Router>
      <>
        <div>
          <div>
            <div>
              <img src={logo} alt="logo" height="40" />
              <h1>COVID VISUALIZER</h1>
            </div>
            <div>
              <NavLink to="/"> Country</NavLink>
            </div>
            <div>
              <div>Conf.</div>
            </div>

          </div>
          <hr />
          <Routes>
            <Route path="/" element={<Countries />} />
            { countries.map((country) => {
              console.log('jasem');
              console.log(country.id);
              console.log(country.id.includes(' ') ? country.id.replace(/\s/g, '-') : country.id);
              return (
                <Route
                  key={country.id}
                  path={`/${country.id.includes(' ') ? country.id.replace(/\s/g, '-') : country.id}`}
                  element={<Info country={country} />}
                />
              );
            })}
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
