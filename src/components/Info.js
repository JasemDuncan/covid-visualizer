import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClinicMedical, faCross, faDiagnoses, faGlobe, faHandHoldingMedical,
  faJedi, faMale, faPeopleArrows,
  faRunning, faSyringe, faUsers, faVial, faVials, faVirus,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../world.gif';

const Info = (props) => {
  console.log('Antes de props');
  const { country } = props;
  console.log('imprime props');
  console.log(country);

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card imgContainer mt-3">
            <img src={logo} className="imgGif card-img" alt="logo" />
            <div className="ontop card-img-overlay">
              <div className="titleWorld card-title">
                {country.id}
              </div>
              <div className="subtitleWorld card-text">
                Confirmed:
                {' '}
                {country.confirmed}
              </div>
              <div className="stadisticsWorld card-text">
                Deaths:
                {' '}
                {country.deaths}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="statsByCountry">
            {' '}
            ALL STATS FROM
            {' '}
            {country.id}
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Recovered
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.recovered}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faRunning} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Active
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.active}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faVirus} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Critical
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.critical}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faClinicMedical} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Cases per one million
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.casesPerOneMillion}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faPeopleArrows} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Deaths per one million
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.deathsPerOneMillion}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faCross} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Test
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.tests}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faVial} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Test per one million
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.testsPerOneMillion}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faVials} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Population
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.population}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faUsers} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Continent
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.continent}
            </div>
            <FontAwesomeIcon icon={faGlobe} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            One case per people
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.oneCasePerPeople}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faMale} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            One death per people
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.oneDeathPerPeople}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faJedi} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            One test per people
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.oneTestPerPeople}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faSyringe} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Active person per million
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.activePerOneMillion}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faDiagnoses} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfoTwo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Recovered per one million
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.recoveredPerOneMillion}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faRunning} color="white" className="iconInfo" />
          </div>
        </div>
      </div>

      <div className="row contenedorInfo row-cols rows-cols-lg-5">
        <div className="col d-flex flex-row elementoInfo  mt-1 p-2">
          <div className="confirmedInfo">
            Critical per million
          </div>
          <div className="detailInfo">
            <div className="confirmedSubtitleInfo">
              {country.criticalPerOneMillion}
              {' '}
              people
            </div>
            <FontAwesomeIcon icon={faHandHoldingMedical} color="white" className="iconInfo" />
          </div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default Info;
