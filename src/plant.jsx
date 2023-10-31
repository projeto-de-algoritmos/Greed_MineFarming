import PropTypes from 'prop-types';
import "./plant.css"; 
  
function Plant({ type, value, weight, image }) {
  return (
    <div className="plant">
      <img src={image} alt={type} className="plant-image" />
      <h3>{type}</h3>
      <p>Valor: {value}</p>
      <p>Peso da planta: {weight}</p>
    </div>
  );
}

Plant.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
  weight: PropTypes.number,
  image: PropTypes.string.isRequired, 
};

export default Plant;