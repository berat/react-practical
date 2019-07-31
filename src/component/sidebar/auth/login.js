import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setAuthStatus }) => {
    return (
        <div className="card">
            <div className="card-header">Giriş Yap</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" minLength="1" maxLength="16" className="form-control" id="userName" placeholder="Kullanıcı Adınız" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Şifreniz" />
                    </div>
                    <small id="emailHelp" class="form-text text-muted mt-n2 mb-sm-2"><Link to="/sifre-sifirla" onClick={() => { setAuthStatus(2) }}>Şifremi Unuttum</Link></small>
                    <button type="submit" className="form-control btn btn-primary">Giriş Yap</button>
                    <small id="emailHelp" class="text-center form-text text-muted mt-sm-2">Hesabın yok mu?<Link to="/kayit-ol" onClick={() => { setAuthStatus(1) }}> Kayıt Ol</Link></small>
                </form>

            </div>
        </div>
    )
}

export default Login;