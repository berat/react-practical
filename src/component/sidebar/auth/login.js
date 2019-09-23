import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login = ({ loginOl, setdefaultComp }) => {

    const email = useRef(),
        pass = useRef();

    const giris = e => {
        e.preventDefault();
        Axios.post("https://practical-react-server.herokuapp.com/v1/auth/giris-yap", { email: email.current.value, password: pass.current.value })
            .then(function (response) {
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
            <div className="card-header">Giriş Yap</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" ref={email} minLength="1" className="form-control" id="userName" placeholder="Kullanıcı Adınız" />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={pass} className="form-control" id="exampleInputPassword1" placeholder="Şifreniz" />
                    </div>
                    <small id="emailHelp" className="form-text text-muted mt-n2 mb-sm-2"><Link to="/forget" onClick={() => { setdefaultComp(2) }}>Şifremi Unuttum</Link></small>
                    <button type="submit" onClick={giris} className="form-control btn btn-primary">Giriş Yap</button>
                    <small id="emailHelp" className="text-center form-text text-muted mt-sm-2">Hesabın yok mu?<Link to="/sign-up" onClick={() => { setdefaultComp(1) }}> Kayıt Ol</Link></small>
                </form>

            </div>
        </div>
    )
}

export default Login;