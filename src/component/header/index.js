import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	const [toggleIsVisible, setToggleIsVisible] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">react-practical</Link>
				<button className="navbar-toggler" onClick={() => setToggleIsVisible(!toggleIsVisible)} type="button">
					<span className="navbar-toggler-icon" />
				</button>
				<div style={{ display: toggleIsVisible ? "none" : "block" }} className="justify-content-end navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav justify-content-end">
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="/">Ansayfa</Link>
						</li>
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="/profil">Profil</Link>
						</li>
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="/giris-yap">Giriş Yap</Link>
						</li>
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="/kayit-ol">Kayıt Ol</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header;