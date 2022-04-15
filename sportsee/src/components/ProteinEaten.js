import img from '../assets/images/protein-icon.png';

function ProteinEaten (props) {
    let proteins = props.proteins;

    return (
        <div className="protein-eaten-container row mb-4">
            <img className="protein-eaten-container-img img-rounded data-img" src={img} alt="protein"/>
            <div className="protein-eaten-title d-flex flex-column">
                <span className="protein-eaten-title-text">{proteins}g</span>
                <span className="protein-eaten-title-subtext">Protéines</span>
            </div>
        </div>
    )

}

export default ProteinEaten