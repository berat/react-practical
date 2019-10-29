import React from 'react';
import useCookie from '@devhammed/use-cookie'
import { useDispatch } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from '../component/sidebar/auth/login';
import Register from '../component/sidebar/auth/register';
import Welcome from '../component/sidebar/auth/welcome';
import ProfileSidebar from '../component/profile/sidebar'

const Auth = () => {

    const [login, setLogin, deleteLogin] = useCookie('login', null)
    const [defaultComp, setdefaultComp, deleteDefaultComp] = useCookie('defaultComp', 0)


    const dispatch = useDispatch();

    dispatch({
        type: 'LOGIN',
        payload: login
    })


    return (
        <Switch>
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
            <Route path="/profile/:username" component={ProfileSidebar} />
            <Route path="/sign-up" component={() => {
                if (login === null) {
                    setdefaultComp(1)
                    return <Register setdefaultComp={setdefaultComp} />
                } else {
                    return <Redirect to="/home" />
                }
            }} />
            <Route component={() =>{
                 if (login !== null) {
                    setdefaultComp(4);
                    return <Welcome deleteLogin={deleteLogin} defaultComp={defaultComp} deleteDefaultComp={deleteDefaultComp} />
                }
                else {
                    setdefaultComp(0);
                    console.log(defaultComp)
                    return <Login loginOl={setLogin} setdefaultComp={setdefaultComp} />
                }
            }} />
        </Switch>
    )
}
export default Auth;