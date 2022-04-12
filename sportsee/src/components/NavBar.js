import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-h">
                <img className="navbar-logo" src={logo} alt="logo" />
                <nav className="navbar-h-navigation">
                    <Link to="/" className="navbar-h-link">Accueil</Link>
                    <Link to="/" className="navbar-h-link">Profil</Link>
                    <Link to="/" className="navbar-h-link">Réglage</Link>
                    <Link to="/" className="navbar-h-link">Communauté</Link>
                </nav>
            </div>
            <div className="navbar-v">
                <nav className="navbar-v-navigation">
                    <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-medit.png')} alt='meditation icon'/></Link>
                    <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-swim.png')} alt='swimming icon'/></Link>
                    <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-bicycle.png')} alt='bicycle icon'/></Link>
                    <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-musc.png')} alt='musculation icon'/></Link>
                </nav>
            </div>
        </div>
    )
}

export default NavBar