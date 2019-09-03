import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {

	const [toggleIsVisible, setToggleIsVisible] = useState(false);
	const [aktiflik, setAktiflik] = useState(false);

	useEffect(() => {
		

        if(Cookies.get("login")){
			setAktiflik(true)
		}
		
	}, [])

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<NavLink className="navbar-brand" to="/">react-practical</NavLink>
				<button className="navbar-toggler" onClick={() => setToggleIsVisible(!toggleIsVisible)} type="button">
					<span className="navbar-toggler-icon" />
				</button>
				<div style={{ display: toggleIsVisible ? "none" : "block" }} className="justify-content-end navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav justify-content-end">
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/">Ansayfa</NavLink>
						</li>
						<li className="nav-item" style={{ display : aktiflik===false ? "none": "inherit" }}>
							<NavLink activeClassName="active" className="nav-link" to="/profil">Profil</NavLink>
						</li>
						<li className="nav-item" style={{ display : aktiflik===true ? "none": "inherit" }}>
							<NavLink activeClassName="active" className="nav-link" to="/giris-yap">Giriş Yap</NavLink>
						</li>
						<li className="nav-item" style={{ display : aktiflik===true ? "none": "inherit" }}>
							<NavLink activeClassName="active" className="nav-link" to="/kayit-ol">Kayıt Ol</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header;