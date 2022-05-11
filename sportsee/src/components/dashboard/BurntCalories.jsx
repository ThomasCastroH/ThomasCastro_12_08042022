import PropTypes from 'prop-types';

import img from '../../assets/images/calories-icon.png';

/**
 * Display the calories burnt by the user
 * @param {number} props - calories burnt
 */

function BurntCalories (props) {
    let calories = props.keyData;

    return (
        <div className="burnt-calories-container nutirent-info row mb-4 rounded">
            <img className="burnt-calories-container-img img-rounded data-img" src={img} alt="calories"/>
            <div className="burnt-calories-title d-flex flex-column">
                <span className="burnt-calories-title-text">{calories} kcal</span>
                <span className="burnt-calories-title-subtext">Calories</span>
            </div>
        </div>
    )

}

BurntCalories.propTypes = {
    calories: PropTypes.number
}

export default BurntCalories