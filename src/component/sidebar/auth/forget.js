import React from 'react';

const Forget = () => {
    return (
        <div className="card">
            <div className="card-header">Şifreni Değiştir</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="email" minLength="1" maxLength="16" className="form-control" id="userName" placeholder="Mail Adresiniz" />
                    </div>
                    <button type="submit" className="form-control btn btn-primary">Şifremi Sıfırla</button>
                </form>

            </div>
        </div>
    )
}

export default Forget;