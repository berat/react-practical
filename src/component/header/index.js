import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const Header = () => {

	const [toggleIsVisible, setToggleIsVisible] = useState(false);
	const owner = useSelector((state) => (state.authReducer.username))
	const [active, setActive] = useState(false);


	useEffect( () => {
		if (Cookies.get("login")) {
			setActive(true)
		}
	}, [])

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<NavLink className="navbar-brand" to="/home">react-practical</NavLink>
				<button className="navbar-toggler" onClick={() => setToggleIsVisible(!toggleIsVisible)} type="button">
					<span className="navbar-toggler-icon" />
				</button>
				<div style={{ display: toggleIsVisible ? "none" : "block" }} className="justify-content-end navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav justify-content-end">
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
						</li>
						<li className="nav-item" style={{ display: active === false ? "none" : "inherit" }}>
							<NavLink activeClassName="active" className="nav-link" to={`/profile/${owner}`}>Profil</NavLink>
						</li>
						<li className="nav-item" style={{ display: active === true ? "none" : "inherit" }}>
							<NavLink activeClassName="active" className="nav-link" to="/home">Login</NavLink>
						</li>
						<li className="nav-item" style={{ display: active === true ? "none" : "inherit" }}>
							<NavLink activeClassName="active" className="nav-link" to="/sign-up">Register</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header;