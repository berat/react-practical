import React from 'react';
import Login from './login';
import Register from './register';
import Forget from './forget';
import Welcome from './welcome';
import useCookie from '@devhammed/use-cookie'
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {

    const [login, setLogin, deleteLogin] = useCookie('login', null)
    const [defaultComp, setdefaultComp, deleteDefaultComp] = useCookie('defaultComp', 0)


    const defaultComps = useSelector((state) => (state.authReducer.defaultComp))
    const dispatch = useDispatch();

    dispatch({
        type: 'LOGINOL',
        payload: login
    })
    dispatch(
    {
        type: 'COMPONENT',
        payload: defaultComp
    })

    

    return (
        defaultComps === 0
            ? <Login loginOl={setLogin} setdefaultComp={setdefaultComp} />
            : defaultComps === 1
                ? <Register setdefaultComp={setdefaultComp} />
                : defaultComps === 2
                    ? <Forget />
                    : <Welcome deleteLogin={deleteLogin} defaultComp={defaultComp} deleteDefaultComp={deleteDefaultComp} />
    );
}
export default Auth;