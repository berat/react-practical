import React from 'react';
import useCookie from '@devhammed/use-cookie'
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Axios from 'axios';
import jwtDecode from 'jwt-decode';

import Login from './login';
import Register from './register';
import Forget from './forget';
import Welcome from './welcome';

const Auth = () => {

    const [login, setLogin, deleteLogin] = useCookie('login', null)
    const [defaultComp, setdefaultComp, deleteDefaultComp] = useCookie('defaultComp', 0)

    const dispatch = useDispatch();

    dispatch({
        type: 'LOGIN',
        payload: login
    })


    return (
        <>
            <Route path="/home" component={() => {
                if (login !== null) {
                    setdefaultComp(4);
                    return <Welcome deleteLogin={deleteLogin} defaultComp={defaultComp} deleteDefaultComp={deleteDefaultComp} />
                }
                else {
                    setdefaultComp(0);
                    return <Login loginOl={setLogin} setdefaultComp={setdefaultComp} />
                }

            }} />
            <Route path="/sign-up" component={() => {
                if (login === null) {
                    setdefaultComp(1)
                    return <Register setdefaultComp={setdefaultComp} />
                } else {
                    return <Redirect to="/home" />
                }
            }} />
            <Route path="/forget" component={() => {
                if (login === null) {
                    setdefaultComp(2)
                    return <Forget />
                } else {
                    return <Redirect to="/home" />
                }
            }} />

        </>
    )
}
export default Auth;