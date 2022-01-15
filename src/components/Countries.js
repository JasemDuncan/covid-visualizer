import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { getCountries } from '../redux/country/countries';
import { getWorld } from '../redux/world/world';
import logo from '../world.gif';
import WorldInfo from './WorldInfo';

const Countries = () => {
  // For Country
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesReducer);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    if (countries.length === 0) dispatch(getCountries());
  }, []);
  // For World
  const dipatchWorld = useDispatch();
  const world = useSelector((state) => state.worldReducer);
  useEffect(() => {
    if (world.length === 0) dipatchWorld(getWorld());
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card imgContainer mt-3">
            <img src={logo} className="imgGif card-img" alt="logo" />
            <div className="ontop card-img-overlay">
              <div className="titleWorld card-title">
                WORLD COVID 19
              </div>

              {
                  world
                    .map((item) => (
                      <WorldInfo
                        key={item.updated}
                        active={item.active}
                        deaths={item.deaths}
                        recovered={item.recovered}
                        population={item.population}
                      />
                    ))
                }

            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            className="searchInput"
            placeholder="SEARCH"
            type="text"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="statsByCountry"> STATS BY COUNTRY</div>
        </div>
      </div>

      <div className="row contenedor row-cols-2 row-cols-lg-5">
        {
                countries
                  .filter((item) => item.id.toLowerCase().startsWith(searchTerm.toLowerCase()))
                  .map((item) => {
                    const path = item.id;
                    return (
                      <Link className="col d-flex elemento allCountry flex-column justify-content-between mt-1 p-2" key={item.id} to={`/${path.includes(' ') ? path.replace(/\s/g, '-') : path}`}>
                        <div className="d-flex flex-row justify-content-end">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} color="white" />
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                          <div className="d-flex flex-column align-items-end justify-content-end">
                            <div className="countryName">{item.id}</div>
                            <div className="confirmedSubtitle">
                              {item.confirmed.toLocaleString()}
                              {' '}
                              <div className="confirmedSubtitleDetail">Confirmed</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })
          }
      </div>
    </div>
  );
};

export default Countries;
