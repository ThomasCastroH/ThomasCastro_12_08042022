import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';

/**
 * @description Display the horizontal navbar
 * @returns React component
 */

function NavBarH() {
    return (
        <div className="navbar-container w-100">
            <nav className=" navbar navbar-expand-lg navbar-h d-flex">
                <img className="navbar-brand mb-0 h1 navbar-logo" src={logo} alt="logo" />
                <div className="navbar-nav navbar-h-navigation w-100 d-flex justify-content-around">
                    <Link to="/" className="nav-item navbar-h-link">Accueil</Link>
                    <Link to="#" className="nav-item navbar-h-link">Profil</Link>
                    <Link to="#" className="nav-item navbar-h-link">Réglage</Link>
                    <Link to="#" className="nav-item navbar-h-link">Communauté</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBarH