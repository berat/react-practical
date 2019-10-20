import React, { useState } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const ProfileSidebar = ({ match }) => {

    const yazilar = useSelector((state) => (state.Reducer.posts))

    const [counter, setCounter] = useState(0)
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
            if (data) {
                setCounter(data.length)
                setSum(yazilar.filter(value => value.who === match.params.username).length)
            }
            else setCounter(0)
        })

    return (
        counter !== 0 ?
            <div className="card">
                <div className="card-header">Welcome</div>
                <div className="card-body">
                    <p>Welcome to <b>{match.params.username}</b>'s profile page.</p>
                    <p>{match.params.username} has <b>{sum}</b> posts</p>
                </div>
            </div>
            :
            <div className="card">
                <div className="card-header">Welcome</div>
                <div className="card-body">
                    <p> Haven't such a user.. </p>
                </div>
            </div>
    )
}

export default ProfileSidebar;