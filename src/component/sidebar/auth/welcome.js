import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const Welcome = ({ deleteLogin,deleteDefaultComp}) => {

    const kim = useSelector((state) => (state.Reducer.owner))

    const cikisYap = e => {
        deleteLogin()
        Cookies.remove("login")
        Cookies.remove("defaultComp")
        window.location.reload(); 
        deleteDefaultComp(0)
    }
    return (
        <div className="card">
            <div className="card-header">Hoş Geldin</div>
            <div className="card-body">
                <p> Merhaba <b>{
                    kim.map( value => value.who)
                }</b>, Hoşgeldin.</p>
                <Link to="/" onClick={cikisYap}>Çıkış Yap</Link>
            </div>
        </div>
    )
}

export default Welcome;