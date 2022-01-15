import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faChevronLeft,
//   faMicrophone, faCog, faSignal,
// } from '@fortawesome/free-solid-svg-icons';
import Countries from './components/Countries';
import Info from './components/Info';
import NavBar from './components/NavBar';

function App() {
  const countries = useSelector((state) => state.countriesReducer);
  return (
    <Router>
      <>
        <div>
          <NavBar />
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
