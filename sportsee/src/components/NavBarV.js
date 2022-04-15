import { Link } from 'react-router-dom'

function NavBarV () {
    return (
        <div className="navbar-v h-100">
            <nav className="nav navbar-v-navigation flex-column">
                <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-medit.png')} alt='meditation icon'/></Link>
                <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-swim.png')} alt='swimming icon'/></Link>
                <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-bicycle.png')} alt='bicycle icon'/></Link>
                <Link to="/" className="navbar-v-link"><img className='navbar-icon' src={require('../assets/images/icon-musc.png')} alt='musculation icon'/></Link>
            </nav>
        </div>
    )
}

export default NavBarV