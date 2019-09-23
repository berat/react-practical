import React from 'react';
import Login from './login';
import Register from './register';
import Forget from './forget';
import Welcome from './welcome';
import useCookie from '@devhammed/use-cookie'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const Auth = () => {

    const [login, setLogin, deleteLogin] = useCookie('login', null)
    const [defaultComp, setdefaultComp, deleteDefaultComp] = useCookie('defaultComp', 0)


    const defaultComps = useSelector((state) => (state.authReducer.defaultComp))
    const dispatch = useDispatch();

    dispatch({
        type: 'LOGINOL',
        payload: login
    })
    // dispatch(
    //     {
    //         type: 'COMPONENT',
    //         payload: defaultComp
    //     })


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
                if(login === null){
                    setdefaultComp(1)
                    return <Register setdefaultComp={setdefaultComp} />
                }else{
                    return <Redirect to="/home" />
                }
            }} />
            <Route path="/forget" component={() => {
                if(login === null){
                    setdefaultComp(2)
                    return <Forget />
                }else{
                    return <Redirect to="/home" />
                }
            }} />

        </>
    )
}
export default Auth;