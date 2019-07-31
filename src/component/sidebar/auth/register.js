import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ setAuthStatus }) => {
    return (
        <div className="card">
            <div className="card-header">Kayıt Ol</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" pattern="^[a-zA-Z0-9]+$" minLength="1" maxLength="16" className="form-control" id="userName" placeholder="Kullanıcı Adınız" />
                    </div>
                    <div className="form-group">
                        <input type="email" minLength="1" maxLength="16" className="form-control" id="userName" placeholder="Mail Adresiniz" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Şifreniz" />
                    </div>
                    <button type="submit" className="form-control btn btn-primary">Kayıt Ol</button>
                    <small id="emailHelp" class="text-center form-text text-muted mt-sm-2">Hesabın var mı?<Link to="/giris-yap" onClick={() => { setAuthStatus(0) }}> Giriş Yap</Link></small>
                </form>

            </div>
        </div>
    )
}

export default Register;