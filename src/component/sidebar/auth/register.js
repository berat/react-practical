import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Register = ({ setdefaultComp }) => {

    const nickName = useRef(),
        email = useRef(),
        pass = useRef();

    const save = e => {

        e.preventDefault();
        Axios.post("https://practical-react-server.herokuapp.com/v1/auth/kayit-ol", { nickName: nickName.current.value, email: email.current.value, password: pass.current.value })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" ref={nickName} pattern="^[a-zA-Z0-9]+$" minLength="1" maxLength="16" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="email" ref={email} minLength="1" className="form-control" placeholder="Mail address" />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={pass} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={save} className="form-control btn btn-primary">Register</button>
                    <small id="emailHelp" className="text-center form-text text-muted mt-sm-2">Have you account?<Link to="/home" onClick={() => { setdefaultComp(0) }}> Login</Link></small>
                </form>

            </div>
        </div>
    )
}

export default Register;