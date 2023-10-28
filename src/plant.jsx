import PropTypes from 'prop-types';
import "./plant.css"; 
  
function Plant({ type, value, quantity, image }) {
  return (
    <div className="plant">
      <img src={image} alt={type} className="plant-image" />
      <h3>{type}</h3>
      <p>Valor: {value}</p>
      <p>Quantidade disponível: {quantity}</p>
    </div>
  );
}

Plant.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired, 
};

export default Plant;