import img from '../../assets/images/protein-icon.png';
import PropTypes from 'prop-types';

/**
 * @description Display the protein eaten by the user
 * @param {number} props 
 * @returns React component
 */

function ProteinEaten (props) {
    let proteins = props.keyData;

    return (
        <div className="protein-eaten-container nutirent-info row mb-4 rounded">
            <img className="protein-eaten-container-img img-rounded data-img" src={img} alt="protein"/>
            <div className="protein-eaten-title d-flex flex-column">
                <span className="protein-eaten-title-text">{proteins} g</span>
                <span className="protein-eaten-title-subtext">Protéines</span>
            </div>
        </div>
    )

}

ProteinEaten.propTypes = {
    proteins: PropTypes.number
}

export default ProteinEaten