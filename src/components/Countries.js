import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/country/countries';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesReducer);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    if (countries.length === 0) dispatch(getCountries());
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            placeholder="search"
            type="text"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

        {
                countries
                  .filter((item) => item.id.toLowerCase().startsWith(searchTerm.toLowerCase()))
                  .map((item) => {
                    const path = item.id;
                    // console.log('ITEMM');
                    // console.log(item);
                    return (
                      <Link className="col" key={item.id} to={`/${path.includes(' ') ? path.replace(/\s/g, '-') : path}`}>
                        <h6>{item.id}</h6>
                        <h6>{item.confirmed}</h6>
                      </Link>
                    );
                  })
          }

      </div>
    </div>
  );
};

export default Countries;
