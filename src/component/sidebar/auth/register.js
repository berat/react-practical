import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Register = ({ setAuthStatus }) => {

    const nickName = useRef(),
        email = useRef(),
        pass = useRef();

    const save = e => {
        
        e.preventDefault();
        Axios.post("https://practical-react-server.herokuapp.com/v1/auth/kayit-ol", { email: email.current.value, password: pass.current.value })
            .then(function (response) {
                console.log(response);
                setAuthStatus(4);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="card">
            <div className="card-header">Kayıt Ol</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" ref={nickName} pattern="^[a-zA-Z0-9]+$" minLength="1" maxLength="16" className="form-control" placeholder="Kullanıcı Adınız" />
                    </div>
                    <div className="form-group">
                        <input type="email" ref={email} minLength="1" className="form-control" placeholder="Mail Adresiniz" />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={pass} className="form-control" id="exampleInputPassword1" placeholder="Şifreniz" />
                    </div>
                    <button type="submit" onClick={save} className="form-control btn btn-primary">Kayıt Ol</button>
                    <small id="emailHelp" className="text-center form-text text-muted mt-sm-2">Hesabın var mı?<Link onClick={() => { setAuthStatus(0) }}> Giriş Yap</Link></small>
                </form>

            </div>
        </div>
    )
}

export default Register;