import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import logo from './logo.svg';
import Countries from './components/Countries';

function App() {
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
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
