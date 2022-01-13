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
          <div className="row justify-content-md-center">
            <div className="col-3">
              <img src={logo} alt="logo" height="40" />
            </div>
            <div className="col-5">
              <h5>COVID VISUALIZER</h5>
            </div>
            <div className="col-2">
              <NavLink to="/"> Country</NavLink>
            </div>
            <div className="col-2">
              <div>Conf.</div>
            </div>
          </div>
          <hr />

          <Routes>
            <Route path="/" element={<Countries />} />
            { countries.map((country) => (
              <>
                <Route
                  key={country.id}
                  path={`/${country.id.includes(' ') ? country.id.replace(/\s/g, '-') : country.id}`}
                  element={<Info country={country} />}
                />
              </>

            ))}
          </Routes>

        </div>
      </>
    </Router>
  );
}

export default App;
