import React from "react";
import { Link } from "react-router-dom";

function Error() {
  document.title = "SportSee : Page Introuvable";
  return (
    <div className="error">
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;