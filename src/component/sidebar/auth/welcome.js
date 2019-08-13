import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {

    const cikis = e => {
        console.log("cikis");
    }

    return (
        <div className="card">
            <div className="card-header">Hoş Geldin</div>
            <div className="card-body">
                <p> Merhaba Berat, Hoşgeldin.</p>
                <Link onClick={cikis}>Çıkış Yap</Link>
            </div>
        </div>
    )
}

export default Welcome;