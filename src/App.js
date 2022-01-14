import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faMicrophone, faCog, faSignal,
} from '@fortawesome/free-solid-svg-icons';
import Countries from './components/Countries';
import Info from './components/Info';

function App() {
  const countries = useSelector((state) => state.countriesReducer);
  return (
    <Router>
      <>
        <div>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <NavLink to="/">
                <FontAwesomeIcon icon={faChevronLeft} size="s" color="white" />
              </NavLink>
            </div>
            <div className="col-7 d-flex justify-content-center align-items-center">
              <div className="title">COVID VISUALIZER</div>
            </div>
            <div className="col-3 d-flex justify-content-around align-items-center">
              <FontAwesomeIcon icon={faSignal} size="s" color="yellow" />
              <FontAwesomeIcon icon={faMicrophone} size="s" color="white" />
              <FontAwesomeIcon icon={faCog} size="s" color="white" />
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
