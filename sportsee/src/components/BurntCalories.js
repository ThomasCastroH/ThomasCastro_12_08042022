import img from '../assets/images/calories-icon.png';

function BurntCalories (props) {
    let calories = props.calories;

    return (
        <div className="burnt-calories-container row mb-4">
            <img className="burnt-calories-container-img img-rounded data-img" src={img} alt="calories"/>
            <div className="burnt-calories-title d-flex flex-column">
                <span className="burnt-calories-title-text">{calories}kcal</span>
                <span className="burnt-calories-title-subtext">Calories</span>
            </div>
        </div>
    )

}
export default BurntCalories