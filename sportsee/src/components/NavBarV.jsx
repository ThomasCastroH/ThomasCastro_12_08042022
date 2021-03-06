import { Link } from 'react-router-dom'

/**
 * @description Display the vertical navbar
 * @returns React component
 */

function NavBarV () {
    return (
        <div className="navbar-v d-flex flex-column">
            <nav className="nav navbar-v-navigation d-flex flex-column">
                <Link to="#" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-medit.png')} alt='meditation icon'/></Link>
                <Link to="#" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-swim.png')} alt='swimming icon'/></Link>
                <Link to="#" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-bicycle.png')} alt='bicycle icon'/></Link>
                <Link to="#" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-musc.png')} alt='musculation icon'/></Link>
            </nav>
            <span className="copyright">┬ęCopyright, Sportsee 2020</span>
        </div>
    )
}

export default NavBarV