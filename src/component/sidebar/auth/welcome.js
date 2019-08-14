import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ setAuthStatus,deleteLogin,deleteDefaultComp, defaultComp}) => {

    const cikisYap = e => {
        deleteLogin()
        setAuthStatus(0)
        deleteDefaultComp(0)
    }

    return (
        <div className="card">
            <div className="card-header">Hoş Geldin</div>
            <div className="card-body">
                <p> Merhaba Berat, Hoşgeldin.</p>
                <Link onClick={cikisYap}>Çıkış Yap</Link>
            </div>
        </div>
    )
}

export default Welcome;