import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const Profile = ({ deleteLogin,deleteDefaultComp}) => {

    const kim = useSelector((state) => (state.Reducer.owner))
    const posts = useSelector((state) => (state.Reducer.posts))

    const ownerPost = () => kim.map( value => value.who)

    const postFilter = () => {
        
    }
    console.log(posts)
    // useEffect(() => {

    // }, [])

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
                <p> Merhaba <b>{ownerPost}</b>, Hoşgeldin.</p>
                <p>Toplam {} paylaşımın var</p>
                <Link to="/" onClick={cikisYap}>Çıkış Yap</Link>
            </div>
        </div>
    )
}

export default Profile;