import React from 'react';

const Forget = () => {
    return (
        <div className="card">
            <div className="card-header">Change Password</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="email" minLength="1" maxLength="16" className="form-control" id="userName" placeholder="Mail address" />
                    </div>
                    <button type="submit" className="form-control btn btn-primary">Reset My Password</button>
                </form>

            </div>
        </div>
    )
}

export default Forget;