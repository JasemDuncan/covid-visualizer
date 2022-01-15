import PropTypes from 'prop-types';

const WorldInfo = (props) => {
  const {
    active, deaths, recovered, population,
  } = props;

  return (
    <>
      <div>
        <div className="subtitleWorld card-text">
          ACTIVE:
          {' '}
          {active.toLocaleString()}
        </div>
        <div className="stadisticsWorld card-text">
          DEATHS:
          {' '}
          {deaths.toLocaleString()}
        </div>
        <div className="subtitleWorld card-text">
          RECOVERIES:
          {' '}
          {recovered.toLocaleString()}
        </div>
        <div className="stadisticsWorld card-text">
          POPULATION:
          {' '}
          {population.toLocaleString()}
        </div>
      </div>
    </>
  );
};

WorldInfo.propTypes = {
  active: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default WorldInfo;
