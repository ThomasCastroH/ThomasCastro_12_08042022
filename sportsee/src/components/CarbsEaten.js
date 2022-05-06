import PropTypes from 'prop-types';
import img from '../assets/images/carbs-icon.png';

/**
 * Display the carbs eaten by the user
 * @param {number} props - carbs eaten
 * @returns 
 */

function CarbsEaten (props) {
    let carbs = props.carbs;

    return (
        <div className="carbs-eaten-container nutirent-info row mb-4 rounded">
            <img className="carbs-eaten-container-img img-rounded data-img" src={img} alt="carbs"/>
            <div className="carbs-eaten-title d-flex flex-column">
                <span className="carbs-eaten-title-text">{carbs}g</span>
                <span className="carbs-eaten-title-subtext">Glucides</span>
            </div>
        </div>
    )

}

CarbsEaten.propTypes = {
    carbs: PropTypes.number
}

export default CarbsEaten