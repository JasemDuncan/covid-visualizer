import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/country/countries';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesReducer);
  useEffect(() => {
    if (countries.length === 0) dispatch(getCountries());
  }, []);

  return (
    <div>
      {
                countries.map((item) => (
                  <div key={item.id}>
                    <h5>{item.id}</h5>
                    <h5>{item.confirmed}</h5>
                  </div>
                ))
            }
    </div>
  );
};

export default Countries;
