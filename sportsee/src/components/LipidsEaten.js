import img from '../assets/images/fat-icon.png';

function LipidsEaten (props) {
    let lipids = props.lipids;

    return (
        <div className="lipids-eaten-container row">
            <img className="lipids-eaten-container-img img-rounded data-img" src={img} alt="lipids"/>
            <div className="lipids-eaten-title d-flex flex-column">
                <span className="lipids-eaten-title-text">{lipids}g</span>
                <span className="lipids-eaten-title-subtext">Lipides</span>
            </div>
        </div>
    )

}

export default LipidsEaten