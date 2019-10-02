import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div className="alert alert-danger" id="marginTop" role="alert">
        <h4 className="alert-heading">404 - ERROR!</h4>
        <p>Anasayfaya git </p>
        <hr />
        <Link to="/home"> Anasayfa </Link>
      </div>
    )
}

export default Error;