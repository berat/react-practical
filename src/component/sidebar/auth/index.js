import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import Forget from './forget';
import Welcome from './welcome';

const Auth = () => {

    const [autStatus, setAuthStatus] = useState(0);

    return (
            autStatus === 0
            ? <Login setAuthStatus={setAuthStatus} />
            : autStatus === 1
            ? <Register setAuthStatus={setAuthStatus} />
            : autStatus === 2
            ? <Forget setAuthStatus={setAuthStatus} />
            : <Welcome />
    );
}

export default Auth;