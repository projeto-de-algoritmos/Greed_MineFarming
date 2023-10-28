import PropTypes from 'prop-types';

function Plant({ type, value, quantity }) {
  return (
    <div className="plant">
      <h2>{type}</h2>
      <p>Valor: {value}</p>
      <p>Quantidade disponível: {quantity}</p>
    </div>
  );
}

Plant.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Plant;