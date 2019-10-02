import React from 'react';
import { useSelector } from 'react-redux';

const ProfileSidebar = ({match}) => {

    const kim = useSelector((state) => (state.Reducer.owner))

    const yazilar = useSelector((state) => (state.Reducer.posts))
	const profile = JSON.stringify(useSelector((state) => (state.Reducer.owner)).map(value => value.who)).slice(2,-2)

    const filtrele = yazilar.filter( value => value.who===profile)

    return (
        <div className="card">
            <div className="card-header">Hoş Geldin</div>
            <div className="card-body">
                <p> Merhaba <b>{match.params.username}</b>, Hoşgeldin.</p>
                <p>Toplam <b>{filtrele.length}</b> yazın var.</p>
            </div>
        </div>
    )
}

export default ProfileSidebar;