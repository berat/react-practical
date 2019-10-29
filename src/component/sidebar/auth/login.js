import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login = ({ loginOl, setdefaultComp }) => {

    const email = useRef(),
        pass = useRef();


        
    const login = e => {
        e.preventDefault();
        Axios.post("https://practical-react-server.herokuapp.com/v1/auth/giris-yap", { email: email.current.value, password: pass.current.value })
            .then(function (response) {
                console.log(response.data)
                if (response.data.status) {
                    loginOl(response.data.token);
                    window.location.reload();
                    setdefaultComp(4)
                }
                else {
                    alert(response.data.message)
                }
            })
    }

    return (
        <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" ref={email} minLength="1" className="form-control" id="userName" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={pass} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={login} className="form-control btn btn-primary">Login</button>
                    <small id="emailHelp" className="text-center form-text text-muted mt-sm-2">Haven't you account? <Link to="/sign-up" onClick={() => { setdefaultComp(1) }}> Register</Link></small>
                </form>

            </div>
        </div>
    )
}

export default Login;