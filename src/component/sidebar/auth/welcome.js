import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';

const Welcome = ({ deleteLogin,deleteDefaultComp, defaultComp}) => {


    const [kimki,setKimki] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        async function senkron(){
            let userid = jwtDecode(Cookies.get("login")).userid
            const response = await Axios("https://practical-react-server.herokuapp.com/v1/auth/")
            const user = response.data.filter((dataItem) => (dataItem._id === userid));
            const userNickname = JSON.stringify(user.map((value) => { return value.nickName }))
            const nickName = userNickname.slice(2, -2)
            setKimki(nickName)
        }
        senkron()
    }, [])

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
                <p> Merhaba <b>{kimki}</b>, Hoşgeldin.</p>
                <Link onClick={cikisYap}>Çıkış Yap</Link>
            </div>
        </div>
    )
}

export default Welcome;