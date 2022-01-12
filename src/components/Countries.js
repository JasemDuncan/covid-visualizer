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
      <div>
        <input
          placeholder="search"
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {
                countries
                  .filter((item) => item.id.toLowerCase().startsWith(searchTerm.toLowerCase()))
                  .map((item) => {
                    const path = item.id;
                    // console.log('ITEMM');
                    // console.log(item);
                    return (
                      <Link key={item.id} to={`/${path.includes(' ') ? path.replace(/\s/g, '-') : path}`}>
                        <h5>{item.id}</h5>
                        <h5>{item.confirmed}</h5>
                      </Link>
                    );
                  })
            }
    </div>
  );
};

export default Countries;
