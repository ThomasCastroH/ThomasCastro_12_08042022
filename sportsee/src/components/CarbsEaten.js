import img from '../assets/images/carbs-icon.png';

function CarbsEaten (props) {
    let carbs = props.carbs;

    return (
        <div className="carbs-eaten-container row mb-4">
            <img className="carbs-eaten-container-img img-rounded data-img" src={img} alt="carbs"/>
            <div className="carbs-eaten-title d-flex flex-column">
                <span className="carbs-eaten-title-text">{carbs}g</span>
                <span className="carbs-eaten-title-subtext">Glucides</span>
            </div>
        </div>
    )

}

export default CarbsEaten