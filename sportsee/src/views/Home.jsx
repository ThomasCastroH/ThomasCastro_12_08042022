import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

function Home() {
  document.title = "SportSee : Accueil";

  return (
    <div className="home">
      <div className="home-group d-flex flex-column">
        <img className="home-logo" src={logo} alt="logo" />
        <h1 className="home-title">Choose User's profile</h1>
        <div className="home-users d-flex flex-row">
          <Link to="user/12" className="home-user">
            Karl
          </Link>
          <Link to="user/18" className="home-user">
            Cecilia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;