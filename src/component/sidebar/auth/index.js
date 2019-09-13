import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import Forget from './forget';
import Welcome from './welcome';
import useCookie from '@devhammed/use-cookie'

const Auth = () => {

    const [login, setLogin, deleteLogin] = useCookie('login', null)
    const [defaultComp, setdefaultComp, deleteDefaultComp] = useCookie('defaultComp', 0)
    const [autStatus, setAuthStatus] = useState(defaultComp);


    return (
        autStatus === 0
            ? <Login setAuthStatus={setAuthStatus} loginOl={setLogin} setdefaultComp={setdefaultComp} />
            : autStatus === 1
                ? <Register setAuthStatus={setAuthStatus} />
                : autStatus === 2
                    ? <Forget setAuthStatus={setAuthStatus} />
                    : <Welcome setAuthStatus={setAuthStatus} deleteLogin={deleteLogin} defaultComp={defaultComp} deleteDefaultComp={deleteDefaultComp} />
    );
}

// eğer login varsa giremeyecek ama diğer türlü status ayarlamaya gerek yok. Onu linkler ile halledebilirsin. Böylelikle url işini halletmiş olacaksın.

export default Auth;