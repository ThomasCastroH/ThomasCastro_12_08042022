import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

function Error() {
  document.title = "SportSee : Page Introuvable";
  return (
    <div className="error d-flex flex-column justify-content-center aligne-items-center">
      <img className="error-logo" src={logo} alt="logo" />
      <span className="error-title">404</span>
      <span className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;