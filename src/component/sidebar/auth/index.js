import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import Forget from './forget';

const Auth = () => {

    const [autStatus, setAuthStatus] = useState(0);

    return (
            autStatus === 0
            ? <Login setAuthStatus={setAuthStatus} />
            : autStatus === 1
            ? <Register setAuthStatus={setAuthStatus} />
            : <Forget setAuthStatus={setAuthStatus} />
    );
}

export default Auth;