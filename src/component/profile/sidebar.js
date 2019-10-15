import React, { useState } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const ProfileSidebar = ({ match }) => {

    const yazilar = useSelector((state) => (state.Reducer.posts))

    const [sayac, setSayac] = useState(0)
    const [sum, setSum] = useState(0)

    const findUser = () => (
        Axios.get("https://practical-react-server.herokuapp.com/v1/auth/")
            .then(response => {
                const data = response.data;
                return data.filter(value => value.nickName === match.params.username)
            })
    )

    findUser()
        .then((data) => {
            if(data){
                setSayac(data.length)
                setSum(yazilar.filter(value => value.who === match.params.username).length)
            }
            else setSayac(0)
        })

    return (
        sayac !== 0 ?
            <div className="card">
                <div className="card-header">Hoş Geldin</div>
                <div className="card-body">
                    <p> <b>{match.params.username}</b>'ın profiline hoşgeldin.</p>
                    <p>Toplam <b>{sum}</b> yazın var.</p>
                </div>
            </div>
            :
            <div className="card">
                <div className="card-header">Hoş Geldin</div>
                <div className="card-body">
                    <p> Böyle bir kullanıcı yok. </p>
                </div>
            </div>
    )
}

export default ProfileSidebar;